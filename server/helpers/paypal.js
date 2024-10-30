const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AXnhvp0DNAw2zI1k-1NgfsJs_IuhnI7RBvAMGBwbL4-zuRx8c67drQuIMvUXri0qEBvy1bp_BatcVlXP",
  client_secret:
    "ELRYZSRCSAi1oUnsT_cHogUh5DnoFgMDIWmdt8_vkLoaRE71ZeqmlGHKkMad2D35ZXY7NJJAw8vhGTng",
});

module.exports = paypal;
