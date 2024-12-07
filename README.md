# payWithSol

A quick way to accept solana payments for your content.

## Development usage

Build this library using the [`yarn` package manager](https://yarnpkg.com/).

### Clone the project:

```
git clone git@github.com:UuqV/solana-publish-module.git
```

### Install dependencies:

```
cd solana-publish-module
yarn install
```

### Build the library

```
yarn build
```

Find the library file as `dist/payWithSol.js`. You can copy this file to
your project. The file, `dist/index.js` contains one example for including
the library in your project.

## Library usage

`payWithSol()` can be used to connect to phantom and complete a solana transaction.

- `callback`: The function to call after the transaction is signed. This closes our paywall.
- `milliLamports`: The price to charge the user in "milli-lamports" (.001 SOL), approximately 10 cents (for now)
- `reciever`: The public key of the wallet to send payment to. Should be passed from an environment variable wherever your site's deployed.
- `rpcProvider`: (Optional) Alternative RPC provider
