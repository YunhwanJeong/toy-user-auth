## 프로젝트 실행 방법
```
yarn install

yarn start
```

## 주 사용 라이브러리와 사용 의도
### react-query
- Data Fetching
- 서버 상태 관리
### axios
- 비동기 네트워크 요청 및 인터셉터를 활용해 일괄적인 오류 처리 시에 사용.
### react-router-dom
- 페이지 간 라우팅을 위해 사용.
### Material UI
- 제한된 시간 내에 빠른 속도로 사용성 좋은 UI 구현을 위해 사용.

## 프로젝트 폴더 구조와 설계 의도
```
- src
    - apis: API 호출 메소드들
    - components: 재사용 가능한 컴포넌트들
    - context: context api provider들
    - hooks: query, mutation을 포함한 custom hooks들
    - modals: 모달 관련 컴포넌트들
    - pages: 라우트 별 각 페이지들을 구성하는 컴포넌트들
    - router: 라우터
    - utils: 전역 유틸 함수, 객체
```

## 컴포넌트 구조와 설계 의도
```
- pages: 라우트 별로 default 컴포넌트를 둠
    - login
        - index: default
        - LoginForm: 주요 비즈니스 로직
        - LoginTemplate: UI 템플릿
    - reset-password
        - form: 비밀번호 변경의 3가지 단계에 사용되는 form 컴포넌트들
            - authcode
                - RemainAuthMillisecond: 남은 인증 시간
                - VerifyAuthCodeForm: 인증 코드 입력
            - index: default (단계에 따라 적합한 Form 컴포넌트 렌더링)
            - ResetPasswordForm: 새 비밀번호
            - VerifyEmailForm: 이메일 인증
        - index: default
        - ResetPasswordPageTemplate: UI 템플릿
        - ResetPasswordStepper: 비밀번호 변경 단계를 시각적으로 나타내주는 컴포넌트 
    - user
        - index: default
        - UserInformationCard: 주요 비즈니스 로직
            - LogoutButton: 다른 곳에서도 사용 가능한 로그아웃 버튼
        - UserPageTemplate: UI 템플릿
```

## 상태 관리의 구조와 설계 의도
```
- global: 전역 상태
    - LoginContext: 로그인 상태
    - ToastContext: 컴포넌트 트리 어딘가에서 에러 발생 시 모달 창 dispatch를 위한 Context
    - reset-password: 비밀번호 변경 페이지 관련 상태
        - form: 비밀번호 변경 페이지의 각 Form 컴포넌트에서 의존성을 공유하는 상태
        - ResetPasswordStepContext: 현재 비밀번호 변경 단계를 나타내는 상태
        - VerifiedEmailContext: 인증된 이메일에 관련된 상태

상태는 가능한 지역 상태로 존재할 수 있게 하려고 노력하였음.
어쩔 수 없이 전역이어야 하거나 컴포넌트 간 상태 의존성이 생기는 경우에는
가능한 가까운 계층에 Context Provider를 두는 방식으로 설계하였음.
```

## 강조하고 싶은 부분
- 주어진 스펙을 준수하되, 유저 입장에서의 사용성을 생각하면서 작업했습니다.
    - 비밀번호 변경 페이지에 이전, 처음으로 버튼을 두어 에러 발생 등의 예외 상황에 사용자가 다시 돌아가서 step을 진행할 수 있게 하였습니다.
    - 비밀번호 변경 페이지에 Stepper를 두어 현재 비밀번호 변경의 어떤 단계에 있는지 유저가 쉽게 인지할 수 있게 하였습니다.
    - email, password 등의 input에 validation 로직을 두어 error 상황에서 helper text를 노출시켜 사용자가 올바른 값을 입력할 수 있도록 direction을 줄 수 있도록 하였습니다.
    - api 요청 중에는 버튼에 로딩 스피너를 노출시켜 사용자가 로딩 중임을 알 수 있게 하였습니다.
- 지역 상태는 지역 상태로 존재하도록 하는데 신경을 많이 썼습니다.
- 컴포넌트의 재사용성과 불필요한 리렌더링을 방지하기 위해 관심사를 최대한 분리하고, 의존성을 낮추기 위해 노력했습니다.
