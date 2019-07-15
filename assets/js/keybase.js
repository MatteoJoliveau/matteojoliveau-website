function getPublicKeyText(publicKey) {
  publicKey.classList.toggle('is-loading');
  const url = publicKey.dataset.keybaseUrl;
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error('Could not fetch Keybase PK');
    }
  })
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
  const publicKey = document.getElementById('keybase-pk');
  getPublicKeyText(publicKey)
    .then((pk) => {
      publicKey.value = pk;
      publicKey.classList.toggle('is-loading');
    })
    .catch(console.error);

  const button = document.getElementById('copy-pk');
  button.addEventListener('click', copyToClipboard(publicKey, button));
})