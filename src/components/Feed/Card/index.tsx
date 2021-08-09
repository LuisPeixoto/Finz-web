import React from 'react'
import { FiHeart, FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {
  Container,
  User,
  Content,
  SocialActions,
  Like,
  Comment,
  NameAndDate,
} from './styles'

interface Data {
  img?: string
}

const Card: React.FunctionComponent<Data> = ({ img }) => {
  return (
    <>
      <Container>
        <User>
          <Link to="/user">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </Link>
          <NameAndDate>
            <Link to="#">
              <strong>Jones Stone</strong>
            </Link>
            <p>23 horas atrás</p>
          </NameAndDate>
        </User>
        <Content hasImage={!!img}>
          {img && <img src={img} alt="" />}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque volutpat consectetur tortor sit amet commodo. Aliquam
            faucibus lorem sed elit efficitur venenatis. Sed non vestibulum
            diam. Cras vitae porta nisi. Mauris vel risus eget sapien consequat
            mollis et at felis. Aliquam venenatis ante ut tristique aliquet.
            Duis sodales ex eu varius ultricies. Phasellus sed nulla ex.
            Vestibulum gravida, velit fringilla consequat feugiat, erat ligula
            fringilla nulla, vel posuere dui mauris vitae metus. Nunc pretium
            tellus in congue consectetur. Morbi fringilla dignissim dictum.
            Phasellus mollis purus sit amet elit accumsan finibus. Ut ac arcu
            interdum, euismod nisl sit amet, ornare nibh. Nam iaculis cursus
            nibh, id lacinia neque pellentesque et. Etiam efficitur euismod
            vestibulum.
          </p>
        </Content>

        <SocialActions>
          <Like>
            <FiHeart size={24} />
            <p> 25 Likes</p>
          </Like>
          <Comment>
            <FiMessageCircle size={24} />
            <p>2 Comentarios</p>
          </Comment>
        </SocialActions>
      </Container>
    </>
  )
}

export default Card
