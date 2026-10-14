/* Public invitation selection only; no analytics, forms or account collection. */
(() => {
  'use strict';
  const pool = ["B04KYETP1BGZDBSCB70G6EX","DHG44WLSP8HQT4JE8LBCYFW","7DKRY5VG2MXUS81U7KVYB82","3QFPX6HZ0JXV0EN6CVE475T","V2GJX16ZWWJY3LNB8ASJTJY","GBG7HNBLWQM4C9P9XSMA3WX","GL5D1EU48SYS5CUR9GFHUTA","7FNQKNRU3D1URRS7FB3BW6L","EMX807ZBEWU5K2599C6NJ0T","VTNAJ4U392HPFUK1HWXUZHE","MTM0MGNJD4DHF386C9LBWC1","7EQDEKU67FA9CC7KMPBP88B","FC9BASPL1SPWQV5ARAV6WXQ","UZ3JXF1HX80589SE3DGDTH0","MHCCME7BL6NFPWD4M6M61RT","6Z5KD95KH6MGLR4LYFW99TQ","E6L4ZVKU8F2NBZF1R4VZXGG","T2CDAU2PMC91HBFZS082L7C","XXFKKQPAKQ9DTL7EEVX1BAU","Y5WXFNB9EQQWXM70254ZDCD","TF6F2HV9X1S81NXZYHZL3QE","0NJJZ27KPNYQLSXEVZ34QTM","502Z8Z6Y2A45EMXMWVK8B74","6WGQJBVMZTPW39Z6WC4C8LE","34X7CCKGBD3L705DQWC7K96","JV7ENANSJ82RL690FU4RLM0","WCY6WW1TT6F1Z7KC5GB7H9E","6R9Q5151F2B53DPR2MJV3CP","D1DQSZ7J2KPQVATX6GN8ST4","BUFS6X65NKCH5FG6TKV5V61","CV851AX4JP6VEPW350CFVEX","X56756B2HLSQKHECEQXGVTK","NE26TMUZ3EFR6KC5WGZRV2Q","2VK3UPWVJHFBZ70XF8Z17QM","3PU4ARYWYRWFSLH4AH8BY7D","UEFQ9GEK3EPJWN1W94ADY1E","NKLFW68SL97U92GF21THAH0","45BQDE5C8CH23WL71XB6ZKV","LFC136LYTU7Z6R73S3D7T6H","V4AVE60CMR23UV1UY8979D0","DEATMJ0MHJ0TU7N51JB5U74","VUPE7WKV0NMDWBB3XBG6VMZ","CHQFYE38ZN13ET83QYYB715","HKM6DUBBXGWZJ78JUS9VZZJ","Y1XEYAV5TGXY25RFQ3RE599","QAZ31LJFDXLTJX12J9EPUJV","0LHEU94GR7TFXE654KD2JRL","X88XD043R8RX459WGJK25UK","6R8AXGP6MPYR23Y0KY0G18G","UEWW0FV8T8800QUQ3F5PMBU","S2MK5JGGBWVT0RLB0D20KNQ","HDRY3N2GP4R85MT2VU8MXTH","NXG58ESFTW2X1D663PK0Q2N","J5WMX1U6GFX0RY14XEN2M22","B8651QCG8W55FJT4U1PYWRH","GPD20STYSKC90NNUD30GLDM","J10ZWKY6YBFU8H6TYZXZABA","A0LBVCQDC2U43CUFKHJTPCC","F6AGHTKSYB5ENYW4KKCDQ1K","MAUSRRPVXDTGSFVX3C3W0XT","U7BM3LNNC3ZJKCMUD32UQ1A","5A5GDN52CCWTP7S2K8VMDY7","6XT68J3BBWFEPNZF5ZU6V6E","Y6A27N9SKLNP5QXAQ3WY04C","DX8FEQ3RT25E2W3X42EJG4G","SEECWSW03YR1LU0FD26MBVU","VEDQ5D41HX35PG1YTLRMBFZ","YQDF4EU0M60VB93QQKRCQW0","WSNH6KM7RAMLWS1NXJMP9RZ","M18ZUN8KW7SAJDJ6FCGXXND","VF6FU8CL6NQC834TEBH12Q5","7W56QNYD8XMGURXF187TV7L","Q9MZ84A367XUMR4R2X0VQ76","EQ64KV2VWCK4GKUDNLB6ET9","YZHC4FGRHUUUQCAR5M76BTF","VX127RQ042RYDX2NWZPTAKE","54BSR719U3ZUE867V1P6ASB","CPX2LJWP73AQUJ9PWPH7T6Q","H579S448N2CXQ08P0XA58PS","UXE5X13MPDU52U7KX8RR1NP","7WF8VVX5WE1XJXTW0YLWGSN","JPWX1UF6LE0FGWE98137DWL","WNT6W4WS0F3AKYU2EHH1FK9","R6V40WFKENGSSTND0NMZXAC","06MN12RUAXE205AX6ZMAZW4","3GUJQRHHNUK834746RBEEH0","XF0Z0225MW248PENX93299H","PURLE7BLTS21QU16KBKET8D","PY0TJXS4FMK8MU9XCTWR3PG","PD0Q4DK9DW6HEPMBAS8JRKH","VTDFWY3L86RZM2BFUCYZCSH","RHNDKKCNTJ8RP816LTTU6XH","FB2U46BGYVFZSP2QGJRSRGS","ZNYZUFWTSESVSA0FWG7CBNL","7HRQHNLHQUX09144G7LVL5J","KMWD3C42XHDAS94CB2RQ2WH","7AQAYMTV44N87YKUPVRTV0W","P1GS1U4MK71YUG85G6S8UKV","M8WK4GQ4AW3VWB6GS11E6BN"];
  const field = document.getElementById('vela-invitation');
  const copy = document.getElementById('vela-copy');
  const another = document.getElementById('vela-another');
  const status = document.getElementById('vela-code-status');
  const storageKey = 'vela-invitation-20261014';
  if (!field || !copy || !another || !status || !Array.isArray(pool) || !pool.length) return;
  if (field.dataset.initialized === 'true') return;
  field.dataset.initialized = 'true';
  let state = { code: '', shown: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && Array.isArray(saved.shown)) {
      state.shown = saved.shown.filter(code => pool.includes(code));
      if (pool.includes(saved.code)) state.code = saved.code;
    }
  } catch (_) { /* Invitations still work when local storage is unavailable. */ }
  const persist = () => {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
  };
  const choose = () => {
    const candidates = pool.filter(code => !state.shown.includes(code));
    if (!candidates.length) {
      status.textContent = 'Every code in this batch has been shown in this browser. Please check back for more invitations.';
      another.disabled = true;
      return;
    }
    let choice;
    if (globalThis.crypto && crypto.getRandomValues) {
      const values = new Uint32Array(1);
      crypto.getRandomValues(values);
      choice = values[0] % candidates.length;
    } else {
      choice = Math.floor(Math.random() * candidates.length);
    }
    state.code = candidates[choice];
    state.shown.push(state.code);
    field.value = state.code;
    status.textContent = 'Invitation shown. Google Play will check whether it is still usable.';
    persist();
  };
  if (state.code) {
    field.value = state.code;
    if (!state.shown.includes(state.code)) state.shown.push(state.code);
    status.textContent = 'Your previous invitation is shown again.';
    persist();
  } else {
    choose();
  }
  another.addEventListener('click', choose);
  copy.addEventListener('click', async () => {
    if (!field.value) return;
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent = 'Code copied. Open Google Play Redeem to continue.';
    } catch (_) {
      field.focus();
      field.select();
      status.textContent = 'The code is selected. Copy it, then open Google Play Redeem.';
    }
  });
})();
