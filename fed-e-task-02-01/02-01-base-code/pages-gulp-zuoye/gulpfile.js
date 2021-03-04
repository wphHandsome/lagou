// 实现这个项目的构建任务
const {src, dest, parallel, series, watch} = require('gulp')
const del = require('del')
const browserSync = require('browser-sync')
const bs = browserSync.create()
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()
const {sass, babel, swig, imagemin, ghPages, eslint, sassLint} = plugins
const config = {
  production: false,
  port: 8080,
  open: false
}
const isMini = () => config.production
const calculateConfig = () => {
  const argv = process.argv
  console.log(argv)
  const task = argv[2]
  if(task === 'serve') {
    config.production = false
    config.open = argv.includes('--open')
    config.port = argv.includes('--port') && parseInt(argv[argv.indexOf('--port')+1], 10) || 8080
    config.root = 'temp'
  } else if (task === 'build') {
    config.production = argv.includes('--production') || argv.includes('--prod')
  } else if (task === 'start') {
    config.open = argv.includes('--open')
    config.port = argv.includes('--port') && parseInt(argv[argv.indexOf('--port')+1], 10) || 8080
    config.root = 'dist'
  } else if (task === 'deploy') {
    config.production = true
    config.branch = argv.includes('--branch') && argv[argv.indexOf('--branch')+1] || 'gh-pages'
  }
  console.log('config', config)
}

calculateConfig()

const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}

// Clean the dist & temp files.
const clean = () => {
  return del(['dist', 'temp'])
}

const myeslint = () => {
  return src(['src/assets/scripts/*.js'])
  .pipe(eslint({
    rules: {
        'my-custom-rule': 1,
        'strict': 2
    },
    globals: [
        'jQuery',
        '$'
    ],
    envs: [
        'browser'
    ]
  }))
  .pipe(eslint.format())
}

const mysasslint = () => {
  return src(['src/assets/styles/*.scss'])
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
}

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(dest('temp'))
  .pipe(bs.reload({stream: true}))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(dest('temp'))
  .pipe(bs.reload({stream: true}))
}

const page = () => {
  return src('src/**/*.html', { base: 'src' })
    .pipe(swig({ data, defaults: { cache: false } })) // 防止模板缓存导致页面不能及时更新
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}

const image = () => {
  return src('src/assets/images/**', {base: 'src'})
  .pipe(imagemin())
  .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', {base: 'src'})
  .pipe(imagemin())
  .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', {base: 'public'})
  .pipe(dest('dist'))
}

const browser = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)

  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)

  bs.init({
    notify: false,
    port: config.port,
    open: config.open,
    server: {
      baseDir: [config.root, 'src', 'public'], // 按顺序查找
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

const useref = () => {
  return src('temp/*.html', { base: 'temp' })
  .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
  .pipe(plugins.if(/\.js$/, plugins.uglify()))
  .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
  .pipe(plugins.if(/\.html$/, plugins.htmlmin({
    collapseWhitespace: isMini(),
    minifyCSS: isMini(),
    minifyJS: isMini()
  })))
  .pipe(dest('dist'))
}

const mydeploy = () => {
  return src('dist/**/*')
    .pipe(ghPages([{
      branch: config.branch
    }]))
}

const lint = parallel(myeslint, mysasslint)

const compile = parallel(style, script, page)

const serve = series(compile, browser)

const build = series(
  clean,
  parallel(
    series(compile, useref),
    image,
    font,
    extra
  )
)

const start = series(build, browser)

const deploy = series(build, mydeploy)

module.exports = {
  clean,
  compile,
  build,
  serve,
  start,
  deploy,
  lint
}