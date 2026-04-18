/* =========================================================
   ピロロ病院 - 設定ファイル
   =========================================================
   Firebase と EmailJS の公開設定。
   これらはブラウザから参照される「公開キー」です。
   Firestoreのセキュリティルールで保護されている前提です。
   ========================================================= */

window.PIRORO_CONFIG = {

  // ------- Firebase 設定 -------
  firebase: {
    apiKey: "AIzaSyBzRLLORU8F3M0aqLwBZYcHLsecYncymOc",
    authDomain: "piroro-hospital.firebaseapp.com",
    projectId: "piroro-hospital",
    storageBucket: "piroro-hospital.firebasestorage.app",
    messagingSenderId: "77607584358",
    appId: "1:77607584358:web:b61e0bbd949f201a7763a7"
  },

  // ------- EmailJS 設定 -------
  emailjs: {
    serviceId:  "service_t7rl1ol",
    templateId: "template_tizzs09",
    publicKey:  "S1Ab1dYzeb9PcZWub"
  },

  // ------- 病院情報（メール本文などで使用） -------
  hospital: {
    name: "ピロロ病院",
    address: "",
    tel: ""
  }
};
