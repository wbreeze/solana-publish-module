"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payWithSol = void 0;
var web3 = _interopRequireWildcard(require("@solana/web3.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// callback: The function to call after the transaction is signed.
// This closes our paywall.
// milliLamports: The price to charge the user in "milli-lamports" (.001 SOL),
// approximately 10 cents (for now)
// reciever: The public key of the wallet to send payment to.
// Should be passed as an environment variable wherever your site's deployed.

var payWithSol = exports.payWithSol = function payWithSol(callback, milliLamports, reciever) {
  window.solana.connect().then(function (userKey) {
    // Connect to cluster
    var connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
    var web3userKey = new web3.PublicKey(userKey.publicKey);
    var web3reciever = new web3.PublicKey(reciever);

    // Add transfer instruction to transaction
    connection.getLatestBlockhash().then(function (blockhashObj) {
      var transaction = new web3.Transaction({
        recentBlockhash: blockhashObj.blockhash,
        feePayer: web3userKey
      }).add(web3.SystemProgram.transfer({
        fromPubkey: web3userKey,
        toPubkey: web3reciever,
        lamports: web3.LAMPORTS_PER_SOL * .001 * milliLamports
      }));

      // Sign transaction, broadcast, and confirm
      window.solana.signAndSendTransaction(transaction).then(function (res) {
        callback();
      });
    });
  });
};