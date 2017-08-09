# QuizMasterAPI

quiz-master-api is front end application of QuizMaster.

## Requirements

quiz-master-api requires the following to run:

  * [Ruby](https://github.com/ruby/ruby) +2.3
  * [mysql](https://github.com/mysql/mysql-server) +5.7

## Usage
quiz-master-api uses mysql for database.
First you need to create a database.
It's easy to create with this command below.
```
rails db:migrate
```

gem install with command below.
```
bundle install
```

then you can start server with this command.
```
rails s
```

## Test
you can run test with command below.
```
bundle exec rspec
```