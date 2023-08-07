import { FormEvent, useState } from 'react';
import { NewslaterWrapper } from './styes';
import { Button } from '../Button';
import api from '../../services/api';

export default function Newslatter() {
  const [ name, setName ] = useState<string>('')
  const [ email, setEmail ] = useState<string>('')

  function clearForm () {
    setName('');
    setEmail('');
  }


  async function handleNewsLatterSubmit(event: FormEvent) {
    event.preventDefault();
    
    try {
      const 
        res = await api.post('/users', {
          name,
          email
        }),
        scc = res.data;
      
      clearForm()
      console.log(scc)
    } catch (error) {
      console.error(error)
    }
      
  }
  return (
    <NewslaterWrapper onSubmit={handleNewsLatterSubmit}>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <input
        placeholder="Digite seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button type="submit" secondary={false}>Eu quero!</Button>
    </NewslaterWrapper>
  );
}