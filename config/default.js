/**
 * @description config-lite 是一个轻量的读取配置文件的模块。config-lite 会根据环境变量（NODE_ENV）的不同从当前执行进程目录下的 config 目录
 * 加载不同的配置文件。如果不设置 NODE_ENV，则读取默认的 default 配置文件，如果设置了 NODE_ENV，则会合并指定的配置文件和 default
 * 配置文件作为配置，config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件。
 * 如果程序以 NODE_ENV=test node app 启动，则通过 require('config-lite') 会依次降级查找 config/test.js、config/test.json、
 * config/test.node、config/tes.yml、config/test.yaml 并合并 default 配置; 如果程序以 NODE_ENV=production node app 启动，
 * 则通过 require('config-lite') 会依次降级查找 config/production.js、config/production.json、config/production.node、
 * config/production.yml、config/production.yaml 并合并 default 配置
 *
 * @github https://github.com/nswbmw/config-lite
 */

module.exports = {
  tokenSecret: 'bm9kZXNlcnZlckFQSWp8dHNlY6JldA==',
  server: {
    port: +process.env.PORT || 8888
  },
  mongodb: {
    host: '127.0.0.1',
    user: 'porta',
    pwd: 'porta123',
    database: 'earth-development',
    port: 27017
  },
  mysql: {
    host: '127.0.0.1',
    user: 'porta',
    password: 'porta',
    database: 'earth-development',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
}
