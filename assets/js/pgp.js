function getPublicKeyText(publicKey) {
  publicKey.classList.toggle('is-loading');
  const url = publicKey.dataset.pgpUrl;
  return fetch(url)
    .then((res) => (res.json()))
    .then(([{ raw_key }]) => (raw_key));
};

function copyToClipboard(publicKey, button) {
  return () => {
    button.classList.toggle('is-loading');
    publicKey.select();
    document.execCommand("copy");
    button.classList.toggle('is-loading');
    const text = button.textContent;
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = text;
    }, 2000);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const publicKey = document.getElementById('pgp-pk');
  if (publicKey) {

    getPublicKeyText(publicKey)
      .then((pk) => {
        publicKey.value = pk;
        publicKey.classList.toggle('is-loading');
      })
      .catch(console.error);

    const button = document.getElementById('copy-pk');
    button.addEventListener('click', copyToClipboard(publicKey, button));
  }
});