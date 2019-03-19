module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                }
            },
            
        ],
        
    ];

    const babelrcRoots=[
        ".",
        "packages/*",
    ]
    const plugins = [
        "@babel/plugin-syntax-dynamic-import"
    ];

    return {
        presets,
        // babelrcRoots,
        plugins
    };
}