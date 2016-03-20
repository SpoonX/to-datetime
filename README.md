# to-datetime
Extremely simple and small module that formats a Date instance as datetime.

## Installing

`npm i to-datetime --save`

## Usage

```js
var toDateTime = require ('to-datetime');

// From an instance
var date = new Date();

toDateTime(date);

// As UTC
toDateTime(date, true);

// From a constructor string
var dateString = new Date('2016-03-20 15:51:55');
toDateTime(dateString);

// Current time as datetime
toDateTime();

// Current time as UTC
toDateTime(null, true);
```

## Running the tests
`npm test`
