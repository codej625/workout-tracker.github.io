# 운동 세트 카운터를 만들어보자.

<br /><br />

* ESC(Exercise Set Counter) 란?
```
운동하며 세트를 기록하고, 운동순서를 기억하고, 타이머를 작동시키는 건 귀찮고 복잡한 일이다.
위에 문제를 해결할 수 있는 앱을 구현해보자.
```

<br/><br/><br/>

* 개발 정리
```
웹을 기반으로 하는 웹 뷰로 앱을 제작 예정이다.
웹뷰를 테스트 하기 위해선 호스팅중인 웹서비스가 필요하기 떄문에,
GitHub Pages를 사용하여 Web Service를 운영 예정이다.
```

<br/><br/><br/>

* 개발 스택

<br />

1. Front-end
```
- Jvascript -> React
- Web Publishing(HTML, CSS)
- Web(WAS) Server -> Node.js(Express)
```

<br />

2. Back-end
```
- Java -> Spring Boot
- DB -> PostgreSQL -> JPA(Java Persistence API)
- Web(WAS) Server -> Apache Tomcat
```

<br />

```
프론트엔드 서버와 백엔드 서버를 분리했다.
(트래픽 증가 시 프론트엔드 서버를 여러 개의 인스턴스로 스케일 아웃 할 수 있도록 구성하기 위함)

DB에 접근하는 백엔드 서버는 하나로 충분하기 떄문에 프론트엔드(Scale out) 서버와 하나의 백엔드서버, 데이터베이스 서버로 구성될 예정이다.

* 테스트 시 운영 순서
Client -> Mobile App(ios, android) -> GitHub Pages -> 백엔드 서버 -> 데이터베이스 서버

* AWS 사용 운영 시 작동 순서
Client -> Mobile App(ios, android) -> ELB -> EC2 - 프론트엔드 서버(Scale out) -> ELB -> EC2 - 백엔드 서버 -> RDS
```
<br /><br /><br />

3. Domain
```
도메인 구입 사이트 -> 가비아(예정)
도메인 이름 -> 미정
```
