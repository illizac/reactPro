var fs = require('fs')

const copy = (entry, output) => fs.writeFileSync(output, fs.readFileSync(entry))

copy('./src/assets/theme/colors.less', './node_modules/antd/lib/style/color/colors.less')
console.log('copy complete!')
