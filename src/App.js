import { Container, Row, Col, Alert, Button, Badge, Breadcrumb, Card, ButtonGroup } from "react-bootstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Alert variant="primary">Website React Bootstrap</Alert>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="primary">
              Notifications{" "}
              <Badge bg="light" text="dark">
                9
              </Badge>
            </Button>
            <Button className="me-3" variant="primary">
              Message{" "}
              <Badge bg="light" text="dark">
                9
              </Badge>
            </Button>
            <Button className="ms-4" variant="transparent">
              <img src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="FotoProfil" width="25" />
              <Badge bg="transparent" text="dark">
                Andreas
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 12, offset: 9 }}>
            <Alert variant="secondary">
              <Breadcrumb>
                <Breadcrumb.Item className="text-decoration-none" href="/">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="text-decoration-none" href="/">
                  Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <ButtonGroup>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
                <Card.Body>
                  <Card.Title>
                    Diego Godin Ukir Rekor <br /> Spesial Lawan Thailand
                  </Card.Title>
                  <Card.Text>
                    Goldin sekarang menjadi pemain <br /> Uruguay dengan caps terbanyak <br /> setelah membantu negaranya
                    <br /> melibas Thailand di final Piala Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>
                    Neymar Bahas Kontrak <br /> Baru Di Paris Saint- <br /> Germain
                  </Card.Title>
                  <Card.Text>
                    Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>
                    Inggris Mau Jadi Tim <br /> Terbaik Di Dunia
                  </Card.Title>
                  <Card.Text>
                    Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang
                    muncul sekarang ini.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                <Card.Body>
                  <Card.Title>
                    Sani Rizki Fauzi Tegaskan <br /> Mental Pemain Timnas <br /> Indonesia U-23 Tetap <br /> Bagus
                  </Card.Title>
                  <Card.Text>Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pemungkas grup K.</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
