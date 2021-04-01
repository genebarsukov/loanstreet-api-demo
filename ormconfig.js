module.exports = {
    'type': "postgres",
    'url': process.env.DATABASE_URL || 'postgresql://gene@localhost/loanstreet-demo',
    'synchronize': false,
    'entities': ['dist/**/*.entity{.ts,.js}']
}