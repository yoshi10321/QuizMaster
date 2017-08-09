# QuizMasterAPI

quiz-master-api is front end application of QuizMaster.

## Requirements
quiz-master-api requires the following to run:

  * [Ruby](https://github.com/ruby/ruby) +2.3
  * [MySql](https://github.com/mysql/mysql-server) +5.7

## Usage
1. quiz-master-api uses MySql for database.
you need to install MySql.
2. to create a database.
```
create database quizmaster;
```
3. Then you need to create tables.
It's easy to create with this command below.
```
rails db:migrate
```
4. gem install with command below.
```
bundle install
```
5. you can start server with this command.
```
rails s
```

## Test
you need to create database for testing.
```
create database quizmaster_test;
```
then you can run test with command below.
```
bundle exec rspec
```

## 日本語
quiz-master-apiはRuby on Railsで作成したAPIサーバーアプリケーションです。
DBにMySqlを使用しているのでMySqlのインストールをお願いします。
インストールが完了したら、下記のコマンドでデータベースの作成を行ってください。
```
create database quizmaster;
```
次に下記コマンドでデータベースのマイグレーションを行ってください。必要なテーブルが作成されます。
```
rails db:migrate
```
下記コマンドでgemのインストールを行ってください。
```
bundle install
```
アプリの起動をします。
```
rails s
```
