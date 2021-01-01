const chalk = require('chalk')
const tokens = {
  '1': {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

module.exports = [
  {
    url: '/dev-api',
    type: 'post',
    response: config => {
      const PathIndex = JSON.parse(config.body.params).method.indexOf('.')
      const resName = JSON.parse(config.body.params).method.substring(PathIndex + 1)
      console.log(chalk.blue(`请求地址------> ${resName}`))
      if (PathIndex !== -1) {
        return handelFun[resName](config)
      } else {
        return {
          reason: '路径错误'
        }
      }
    }
  }
]

const handelFun = {
  login(config) {
    const { username } = JSON.parse(config.body.params)
    const token = tokens[username]
    if (!token) {
      return {
        code: 60204,
        reason: '账号密码错误'
      }
    }
    return {
      resultcode: 0,
      data: token
    }
  },
  heart() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  rginfo() {
    return {
      'resultcode': 0,
      'reason': '',
      'data': {
        'devname': '12345699kfehfeia',
        'manufacturer': '12345699kfehfeia',
        'chip': '12345699kfehfeia',
        'softversion': '12345699kfehfeia',
        'hardversion': '12345699kfehfeia'
      }
    }
  },
  wanstatus() {
    return {
      'resultcode': 0,
      'reason': '',
      'data': {
        'netplay': 1,
        'wantype': 3,
        'ipaddr': '172.16.22.12',
        'gateway': '172.16.22.1',
        'netmask': '255.255.255.0',
        'dns1': '114.114.114.114',
        'dns2': '202.106.0.20'
      }
    }
  },
  getdhcpd() {
    return {
      'resultcode': 0,
      'reason': '',
      data: {
        'dhcpdip': '192.168.1.1',
        'startip': '192.168.1.2',
        'endip': '192.168.1.254',
        'subnet': '255.255.255.0',
        'lease': 120
      }
    }
  },
  setwan() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  setdhcpd() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  changedwan() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  getapn() {
    return {
      'resultcode': 0,
      'reason': '',
      data: {
        connect: 3,
        username: '123',
        password: '12',
        apn: '255.255.255.0',
        cid: 120
      }
    }
  },
  reset() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  reboot() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  setpwd() {
    return {
      resultcode: 0,
      reason: ''
    }
  },
  logshow() {
    return {
      resultcode: 0,
      reason: ''
    }
  }
}
