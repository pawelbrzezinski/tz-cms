import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby";

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <div>
      <h1>404 - Nie znaleziono</h1>
      <p>
        <Link to={"/"}>
          Ups... Skąd się tu wziąłeś?! Strona, której szukasz nie istnieje. Kliknij tutaj, aby przejść na stronę główną.
      </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
