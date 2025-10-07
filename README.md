# funny-pad

A minimalistic npm package that pads strings with funny words like "banana", "pickle", and "noodle".

## Installationaa

```bash
npm install funny-pad
```

## Usage

```javascript
const funnyPad = require('funny-pad');

// Basic usage - pads with random funny word
const result = funnyPad('hello', 20);
console.log(result); // "hellobananabananaban" (length: 20)

// Custom funny word
const custom = funnyPad('hi', 10, { funnyWord: 'lol' });
console.log(custom); // "hilollolol" (length: 10)

// Pad on the left side
const leftPad = funnyPad('hi', 10, { funnyWord: 'ha', padLeft: true });
console.log(leftPad); // "hahahahahi" (length: 10)
```

## API

### `funnyPad(str, length, options)`

Pads a string to a specified length using funny words.

#### Parameters

- **str** (string): The input string to pad
- **length** (number): The target length of the padded string
- **options** (object, optional):
  - **funnyWord** (string): The funny word to use for padding. If not provided, a random funny word is selected from: banana, pickle, noodle, waffles, doodle, giggle, bubble, muffin, wiggle, snooze
  - **padLeft** (boolean): If true, pad on the left side; otherwise pad on the right (default: false)

#### Returns

- (string): The padded string

#### Throws

- Error if input is not a string
- Error if length is not a number or is negative
- Error if length exceeds maximum allowed (10000)
- Error if funnyWord is not a string or is empty

## Security

Input validation is implemented to prevent:
- Non-string inputs
- Negative or non-numeric lengths
- Excessive memory allocation (max length: 10000)
- Invalid funny words

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## CI/CD

This package uses GitHub Actions for continuous integration. The pipeline runs on pull requests and includes:
- Testing on Node.js 18.x and 20.x
- Code coverage reporting
- Package build verification

## License

MIT
