## 블록체인기반 3D 주사위게임(요트다이스)입니다!
총3명이서 약 2달동안 만든 작품이며 javascript의 프레임워크인 three.js를 메인으로 하여 만들었습니다 


개발환경 : visual studio, remixIDE
3D메타버스, 주사위 모델링 : three.js
요트다이스 룰북 : 순정javascript
ERC-20토큰.NFT : solidity
웹사이트 : HTML.CSS

## GTN_FINAL_main 폴더를 열고 들어가면 여러가지 폴더들이 보입니다!!

1. Contract 폴더에 있는 nft_store.sol 와 Tokrnmaker1.sol가 각각 NFT상점(생성기 포함)과 ERC-20토큰 생성기 코드입니다
2. css폴더에는 모든 웹사이트 css요소 파일이 다 들어있습니다 (ex)주사위상점, 맵상점 등등)
3. images 폴더에는 웹사이트에 사용한 이미지가 들어있습니다 (AI를 통해 만든 이미지 입니다)
4. js폴더에는...
   4_1. 3d_ani.js는 3D애니메이션 렌더링 코드입니다
   4_2. dice.js로 끝나는 파일들은 3D주사위 모델링 코드입니다
   4_3. glb로 끝나는 파일들은 blender에서 가져온 맵 디자인요소들입니다(디자인은 ppt에 나와 있습니다)
   4_4. NFT로 시작하는 파일들은 각각 NFT관리,민팅,상점 코드입니다
   4_5. register.js는 회원가입 코드입니다(블록체인 지갑인 metamask와 연동하여 회원가입하는 코드가 적혀있습니다)
5.metamask-login안에있는 surver.js코드는 metamask로 연동한 계정을 mongoDB와 연동하여 계정을 저장하는 코드가 있습니다
6.model 폴더에는 blender에서 만든 모델링을 glb로 바꿔 가져온 데이터들이 있습니다 해당 데이터는 GTN_Final-main에서 바로 보이는 homepage.js와 House.js, Player.js에서 사용합니다

## GTN_FINAL_main 폴더를 열고 들어가면 여러가지 파일들이 보입니다!!
각종 HTML은 웹사이트 입니다
1. MongoDB와 연동
2. RemixIDE에 들어가 Tokrnmaker1.sol과 nft_store.sol 스마트컨트렉트 활성화  
3. visual studio로 들어가 login.html 를 통해 실행합니다
4. MetaMask계정을 연동하여 회원가입
5. 게임 시작

   
### https://seolog-12.tistory.com/15 에 프로젝트 완료 보고서와 구현영상이 있습니다!!!!!
