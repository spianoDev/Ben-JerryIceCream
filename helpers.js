module.exports = {
    list: function(context, options) {
        console.log(context, options);
        return `<ul>
${context.map(flavor => `<li><a href="/icecreams/${flavor.name}">${flavor.name}</a></li>`).join('')}
</ul>
`
    }
};
