module.exports = {
    options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
        dest: '<%= globalConfig.srcdir %>/scripts/config.js'
    },
    dev: {
        constants: {
            ENV: {
                apiEndpoint: {
                    '1.1': '/api/1.1/',
                    '1.2': '/api/1.2/',
                    '2.0': '/api/2.0/',
                    'login': '/api/1.2/user/login',
                    'logout': '/api/1.2/user/logout',
                    'reset_password': '/api/1.2/user/reset_password',
                    'get_current_user': '/api/1.2/user/current.json',
                    'update_current_user': '/api/1.2/user/current/update',
                    'get_users': '/api/1.2/users.json'
                }
            }
        }
    },
    prod: {
        constants: {
            ENV: {
                apiEndpoint: {
                    '1.1': '/api/1.1/',
                    '1.2': '/api/1.2/',
                    '2.0': '/api/2.0/',
                    'login': '/api/1.2/user/login',
                    'logout': '/api/1.2/user/logout',
                    'reset_password': '/api/1.2/user/reset_password',
                    'get_current_user': '/api/1.2/user/current.json',
                    'update_current_user': '/api/1.2/user/current/update',
                    'get_users': '/api/1.2/users.json'
                }
            }
        }
    }
};

