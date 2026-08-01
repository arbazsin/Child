(function () {
  console.log('[SRC-test] origin=' + window.location.origin);
  fetch('/rest/api/3/myself')
    .then(function (r) { console.log('[SRC-test] rest status=' + r.status); })
    .catch(function (e) { console.log('[SRC-test] ERROR ' + e.message); });
})();