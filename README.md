# elastic-conf-creator

Creating logstash config files for a large number of servers from an input list based on a template

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need node.js to be installede on your system 

### Installing

Just copy files to the folder where you want to run the creator.

### Preparations

Create logstash config file like you want to use it. 

Insert tags as placeholders ( like <exampletag> )in the config file.

Create a input list file. Take care that the column names in the inputlist are the same like the placeholder names you want to use in the template, but with surrounding tag chars( e.g. column in inputlist  = username => placeholder in template = <username>). This is case sensitive.

## How to use

Open a terminal or a command line and type following command

`node creator.js template-file inputlist-file`

## Output 

Config file will always get the name from the values in the first column of the inputlist file

## Process

    1. Create inputlist with the content you want to replace in the config
    2. Create a teamplate config and set placeholders according to input list
    3. Run creator.js (see Usage)
    4. Deploy config files to logstash config folder

## Built With

* [NodeJS](http://www.nodejs.org) - The javascript framework used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Thorsten Moeller** - *Initial work* - 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used

