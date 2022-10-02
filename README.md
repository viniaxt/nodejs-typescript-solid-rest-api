# NodeJS REST API with Typescript applying SOLID principles

## What is SOLID?

> **S**ingle Responsability Principle

> **O**pen-closed Principle

> **L**iskov Substitution Principle

> **I**nterface Segregation Principle

> **D**ependency Inversion Principle


## Project Setup

```zsh
$ yarn init -y

$ yarn add express

$ yarn add typescript @types/express ts-node-dev typescript -D
```

## Project Structure

```
├── src
│   ├── entities                             #
│   │   └── User.ts                          # 
│   │
│   ├── providers                            # 
│   │   ├── implementations                  #
│   │   │   └── MailtrapMailProvider.ts      #
│   │   |
│   │   └── IMailProvider.ts                 # 
│   │
│   ├── repositories                         #
│   │   ├── implementations                  #
│   │   │   └── PostgresUsersRepository.ts   #
│   │   |
│   │   └── IUsersRepository.ts              # 
│   │
│   ├── useCases                             #
│   │   └── CreateUser          
│   │       ├── CreateUserController.ts      #
│   │       ├── CreateUserDTO.spec.ts        #
│   │       ├── CreateUserUseCase.ts         #
│   │       ├── CreateUserUseCase.spec.ts    #
│   │       └── index.ts                     #
│   │
│   ├── app.ts                               #
│   ├── routes.ts                            #
│   └── server.ts                            #
│ 
├── package.json
└── tsconfig.json                            # Typescript compiler configuration
```

### Entity


### Providers

Responsible to create "Entities" but for external APIs


### Repository

Responsabilities:
- Operations available in a certain ? Entity storage ? 

### Use Case

Our logic is completely uncoupled from our infrastructure layer

Responsabilities
- Form of communication with repository that provides data
 