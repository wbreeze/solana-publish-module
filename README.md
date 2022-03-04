A quick way to accept solana micropayments for your content.

This package exports both a function "payWithSol" and "Paywall" component.

The Paywall component is an mui overlay that can protect your content until a customer pays with the phantom wallet.

payWithSol() can be used independently of the react component to connect to phantom and complete a solana transaction.

callback: The function to call after the transaction is signed. This closes our paywall.
milliLamports: The price to charge the user in "milli-lamports" (.001 SOL), approximately 10 cents (for now)
reciever: The public key of the wallet to send payment to. Should be passed from an environment variable wherever your site's deployed.