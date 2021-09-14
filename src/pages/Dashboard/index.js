import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import { createShortUrlRequest } from '../../store/modules/user/actions';
import { Container, Content } from './styles';

export default function Dashboard() {
  const [retUrl, setRetUrl] = useState([]);
  const dispatch = useDispatch();

  function handleSubmit(url) {
    dispatch(createShortUrlRequest(url));
  }

  useEffect(() => {
    async function loadUrls() {
      const response = await api.get('urls');

      setRetUrl(response.data);
    }
    loadUrls();
  }, []);
  return (
    <>
      <Container>
        <Content>

          <Form onSubmit={handleSubmit}>
            <Input name="url" type="text" placeholder="Cole URL a ser Encurtada" />
            <button type="submit">Encurtar</button>
          </Form>

          <table>
            <thead>
              <td>URL completa</td>
              <td>URl encurtada</td>
              <td>data</td>
            </thead>
            <tbody>
              {retUrl.map((listUrl) => (
                <tr key={listUrl.id}>
                  <td>{listUrl.url}</td>
                  <td> <a href={`http://localhost:3333/${listUrl.url}`}>http://localhost:3333/{listUrl.short_url}</a> </td>
                  <td>{listUrl.created_at}</td>
                </tr>
              ))}

            </tbody>
          </table>

        </Content>

      </Container>

    </>
  );
}
