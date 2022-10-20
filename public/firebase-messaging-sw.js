/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDhR-xykKZcitdAtJZHX-wQYlFZSLtnrv0',
  authDomain: 'freecast-app-mobile.firebaseapp.com',
  databaseURL: 'https://freecast-app-mobile.firebaseio.com',
  projectId: 'freecast-app-mobile',
  storageBucket: 'freecast-app-mobile.appspot.com',
  messagingSenderId: '566289482585',
  appId: '1:566289482585:web:da38d8cd131466f81c0248',
  measurementId: 'G-06DYEDDKDD',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
