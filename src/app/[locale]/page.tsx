import Coins from '@/components/Coins/Coins';
import Content from '@/components/Content/Content';
import Form from '@/components/Form/Form';
import Ourcontacts from '@/components/Ourcontacts/Ourcontacts';
import Publications from '@/components/Publications/Publications';
import Shop from '@/components/Shop/Shop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






export default async function Home() {


  return (
    <>
      <ToastContainer />
      <Content />
      <Form/>
      <Coins/>
      <Shop/>
      <Publications/>
      <Ourcontacts />
      
    </>
  
  );
}
