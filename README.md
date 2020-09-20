# vf2
수정
vue&firebase 2

# install

## firebase use

```bash
$ firebase login # If you are not logged in
$ firebase use --add
? Which project do you want to add? xxx-site
? What alias do you want to use for this project? (e.g. staging) default

Created alias default for xxx-site.
Now using alias default (xxx-site)
```

## functions

### key download

functions/key.json download from console service account key

### setting

```bash
# $ firebase functions:config:set admin.email=xx@abc.com admin.db_url=https://xxx-site.firebaseio.com
$ firebase functions:config:set admin.email=seniya2@gmail.com admin.db_url=https://seniya2-vf2.firebaseio.com admin.region=asia-northeast1 admin.bucket_url=seniya2-vf2.appspot.com
$ firebase functions:config:get
```


```bash
$ firebase deploy --only functions
$ firebase deploy --only database
```


## hosting

### Dependecies install

Dependencies installation

```bash
$ yarn # front-end install
$ cd functions && yarn # back-end install
$ cd ..
```

### firebaseConfig file make

make file on root

**./firebaseConfig.js**  
```javascript
export default {
  apiKey: "AIzaSyCMJGWDiuiV91DQOqscCXiVTf2iVNHQXXX",
  authDomain: "xxx-site.firebaseapp.com",
  databaseURL: "https://xxx-site.firebaseio.com",
  projectId: "xxx-site",
  storageBucket: "xxx-site.appspot.com",
  messagingSenderId: "654047601333",
  appId: "1:654047601222:web:8fcdc5ea4091ec77064111",
  measurementId: "G-Z05F3DT444"
}
```


```
파이어베이스라는 것이 결국 내부적으로는 gcp로 이루어져있습니다. 편하게 쓸 수 있도록 gcp 설정을 해주는 역할을 합니다.

gcp sdk 설치
https://cloud.google.com/sdk/docs?authuser=0
위 링크 대로 설치해줍니다.

파이썬까지 설치해야되서 사실 좀 짜증이 날 수도 있습니다.

cors.json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
cors.json 파일을 만듭니다. origin *은 모든 곳에서 get요청을 받겠다는 것입니다.

적용
$ gsutil cors set cors.json gs://<your-cloud-storage-bucket>
이렇게 하고 나면 접근이 가능합니다.

```