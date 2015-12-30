fis.config.set('modules.postpackager', 'simple');
//取消下面的注释开启pack人工干预
fis.config.set('pack', {
    'static/lib.js': [
        'jquery.min.js',
        '*.js'
    ],
    'static/aio.css':[
    	'**.css'
    ]
});
fis.config.set('settings.postpackager.simple.autoCombine', true);


fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js'),
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css'),
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
