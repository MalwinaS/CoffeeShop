module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential'],
    plugins: ['vue'],
    rules: {
        'no-mixed-spaces-and-tabs': 0,
        'no-unexpected-multiline': 0,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },   
}
