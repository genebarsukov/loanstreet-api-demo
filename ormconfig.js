module.exports = {
    'type': "postgres",
    'url': process.env.DATABASE_URL || 'postgresql://gene@localhost/loanstreet-demo',
    'ssl': true,
    'synchronize': false,
    'entities': ['dist/**/*.entity{.ts,.js}']
}