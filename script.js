
function here() {
  const phonenumber = "919034538737"; // with country code

  const msg = `Yukeshe, ekdam thulo breaking news chha.
Dherai research, overthinking ra 27 ota mental breakdown pachi… ma officially gay ho bhanne confirm bhayo.
Ma tyahi purano pagal saathi ho, bas setting matra thap upgrade bhayo.
Aasha chha yo le kehi change gardaina 😂`;

  const encodedmsg = encodeURIComponent(msg);
  const url = `https://wa.me/${phonenumber}?text=${encodedmsg}`;

  window.location.href = url;
}
