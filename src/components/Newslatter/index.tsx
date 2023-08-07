import { FormEvent, useState } from 'react';
import { NewslaterWrapper, NewslaterFormGroup } from './styes';
import { Button } from '../Button';
import api from '../../services/api';

import { toast } from 'react-toastify';

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
        await api.post('/users', {
          name,
          email
        }),
      
        toast.success(`${name} seu cadastro com o email ${email} foi um sucesso !`, {
          position: toast.POSITION.TOP_CENTER
        });
      clearForm()
    } catch (error) {
      toast.error("erro ao enviar email", {
        position: toast.POSITION.TOP_CENTER
      });
    }
      
  }
  return (
    <NewslaterWrapper>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <NewslaterFormGroup onSubmit={handleNewsLatterSubmit}>
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
      </NewslaterFormGroup>
    </NewslaterWrapper>
  );
}