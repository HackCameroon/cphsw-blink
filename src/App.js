import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Accounts from './components/Accounts';
import Table from './components/Table';
import Analytics from './components/Analytics';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
}));

// const danske = {
//   accessToken:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0MGVlNmI3LTY1YjUtNGMxYi05MDg2LTg3OTFlODE0NzI5NyIsInNjb3BlIjpbXSwiaWF0IjoxNTYwNjc5MTE2LCJleHAiOjE1NjA3NjU1MTZ9.KqOsT2wm37wckGQIJB25_2AwFaVGLwaPkxFldDysbrM',
//   clientId: 'v0vvhw9m60vzwjtqjw8ya2qjzlpfv2fn',
//   clientSecret: 'n7qzjpm9e38ecvalih25zushsew5kwf1',
//   merchantId: 'ede2be27-bcfc-46e1-9b4a-47ba02197fb6',
//   playgroundId: '48350d12-861e-430d-a482-e5e2952ef71a'
// };

// const nordea = {
//   accessToken:
//     'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..vJY7kyy0m6MrIOv2.tqKMqp7aVvk1uCJ-nZcxHehfTe58-qWikJLsJH2N3iq_RO0nbvL2NajFyiDcHWC8KNS2L7m-aNphAjXEVPyFVKg_8tCXITkFw9m8iT7wOg9ZCOmL_mxIDyNHyGySOIj4WGRq8hTGZnavkEGFcfKOE0qXa6mjVeNpGNOe6J-tFlM3owIBXcpdeySiec_NVciyTTWm39pu6Z39V520QMhIJqCM4zzFv5I0G6RiyyS9seat7DPRHjKEVE7fDo-8kkFrSd9THgvWLTyUCS3lRdYzc_ES3y6t_LB30d0vvmRWQL5XCS8hpPHaEWvw0j6ztk8Gi8Gv3dJrGAwDkGxXiTMlvdx2sPD6vyV2GQTONMagyHhWYtlH1H2tFlW--oYrd8ZtzbdEO6IR2-STlnnQ6bZlp8aX1_ZQo9mLgXV2zCgSo3yasEZ1D1vOLMx6sOxBIZMBtt6o8X__OoyO0Jabl8BUGvCURI_xuKFt0cFJd2MS11LNI4rfgNZDhxyjKlgsh1lj-SnNObdyUlzzUowNlJdzukiZ8qQA2gnD5TeOPEQ5exwwN1djE2lsOj1NkPqLSUe8xJS-0zSc3nC_J5tWdYQZwohUzNagVKof1aS2dIsCpxBKEnZByvDcSKyrt8Sd9Xvzp8XoZ0YMtc4btQfgTRjLTezxh8OxUqg3J6dI2Rm6iJx6ebVWvluyw33vosN-Aa3GM1EbxPDYuSfI5vSGTr3XhzArc5i9wtyXUquICqTUa2l_xDH_GDTsjjRwHmtONYoslhNIzqzl_iJ0LbCUjXdhv_3LDZZw-gQD3vUenvPq8DxhTFw2U-qAae39yqmZdMDhKAeRK4CswqoJGQbKVba9Mfv2hbEJbs78ggiOiFGBUgRJUEDnvM0nec8_FDtv1d17ZXvUJn6QbjfK3MRu4W661kMHQpPdtjWGeCen6DQxqOb3YXpAKMTjOpbjOM9y5j60I7s8djeQpOOjrBROvYnQr00oWuyXPWZUOd-nGnCMeSzfntXTMQ7PK5brGmhUbpRaOdsOdMDJO57sQF5-5uY0wdu_zXXqnJMvSOhcLRjlq_o_yiHad4ZDKYQ8WWOy_omxP36qPqNSmoY9DuXnSu2KeDf5Qv72Q0lj-fFvShFBqE6R4ib2KgdWuaV8w5ymDA.uq19DtZmm1JySptpreqQFw',
//   signature:
//     'keyId="4151a281-6c7c-430c-8015-cc7468b0a033",algorithm="rsa-sha256",headers="(request-target) /v2/accounts date",signature="d707r8QJ0GoYQXO5zSE2HzGpuHchrzUrie19J8tuqWV"',
//   clientId: '4151a281-6c7c-430c-8015-cc7468b0a033',
//   clientSecret: 'W5wY1vT8eR1tL2uG5gI4uT7aN0lC8iJ5mP6dC5sG4uH5wD2qO0',
//   host: '/v2/accounts'
// };

// const mobilpay = {
//   accessToken:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0MGVlNmI3LTY1YjUtNGMxYi05MDg2LTg3OTFlODE0NzI5NyIsInNjb3BlIjpbXSwiaWF0IjoxNTYwNjA2MzY3LCJleHAiOjE1NjA2OTI3Njd9.8eLpB6dzVafJio13BSQyVcu-Rc3h1d6cR35j-Qm31lQ',
//   clientId: 'v0vvhw9m60vzwjtqjw8ya2qjzlpfv2fn',
//   clientSecret: 'n7qzjpm9e38ecvalih25zushsew5kwf1',
//   merchantId: 'ede2be27-bcfc-46e1-9b4a-47ba02197fb6',
//   playgroundId: '48350d12-861e-430d-a482-e5e2952ef71a'
// };

const revolut = {
  clientId: 't3--_jxwUV62JMOGW2tIf7NmBW9JrhjhK11P4D70Rag',
  clientSecret: 'sand_rK6RmKmbfZu32yOJOd5NOri4Ijcl-EOgDrhK8KscTe8'
};

const App = () => {
  const { clientSecret } = revolut;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [ax, setAx] = useState([]);
  const [tx, setTx] = useState([]);
  const [fx, setFx] = useState([]);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${clientSecret}`
  };

  const fetchAx = async () => {
    console.log('accounts', ax);
    // const { accessToken, clientId, clientSecret } = revolut;
    // const { accessToken, clientId, clientSecret, merchantId } = mobilpay;
    // const { accessToken, signature, clientId, clientSecret, host } = nordea;
    // const {
    //   accessToken,
    //   clientId,
    //   clientSecret,
    //   merchantId,
    //   playgroundId
    // } = danske;

    // const date = new Date().toUTCString();
    // const url =
    //   'https://cors-anywhere.herokuapp.com/https://api.mobilepay.dk/api/v1/merchants/me';
    // const url =
    //   'https://cors-anywhere.herokuapp.com/https://api.nordeaopenbanking.com/listed-rates-pricing/v2/prices/COMPANY_A/EURUSD';
    // const url =
    // 'https://cors-anywhere.herokuapp.com/https://api.nordeaopenbanking.com/listed-rates-pricing/v2/companies';
    // const url =
    //   'https://cors-anywhere.herokuapp.com/https://api.nordeaopenbanking.com/xs2a-business/v1/accounts';
    // const url =
    //   'https://cors-anywhere.herokuapp.com/https://api.nordeaopenbanking.com/xs2a-business/v1/accounts/SE30167700413-CHF';
    // const url =
    //   'https://cors-anywhere.herokuapp.com/https://api.nordeaopenbanking.com/xs2a-business/v1/accounts/SE99603413908389-EUR/transactions';
    // const url = `https://playground.syst.connectus.lt/v1.0/${playgroundId}/merchant/${merchantId}/transaction`;
    const url = `https://cors-anywhere.herokuapp.com/https://sandbox-b2b.revolut.com/api/1.0/accounts`;

    // const headers = {
    //   'Content-Type': 'application/json',
    //   // Authorization: `Bearer ${accessToken}`,
    //   // Signature: `keyId="4151a281-6c7c-430c-8015-cc7468b0a033",algorithm="rsa-sha256",headers="(request-target) host date",signature="d707r8QJ0GoYQXO5zSE2HzGpuHchrzUrie19J8tuqWV"`,
    //   'X-IBM-Client-Id': clientId,
    //   'X-IBM-Client-Secret': clientSecret
    //   // 'X-Nordea-Originating-Date': date,
    //   // 'X-Nordea-Originating-Host': host
    // };

    // console.log(headers);

    const req = await fetch(url, {
      method: 'GET',
      headers
    });

    const res = await req.json();
    console.log(res);

    return setAx(res);

    // return setData(
    //   res.response.accounts.map(u => ({
    //     id: u._id,
    //     iban: u.iban,
    //     name: u.account_name,
    //     product: u.product,
    //     balance: u.available_balance,
    //     currency: u.currency
    //   }))
    // );
  };

  const fetchTx = async () => {
    console.log('transactions', tx);
    const url =
      'https://cors-anywhere.herokuapp.com/https://sandbox-b2b.revolut.com/api/1.0/transactions';
    const req = await fetch(url, {
      method: 'GET',
      headers
    });

    const res = await req.json();
    console.log(res);

    return setTx(
      res.map(entry => ({
        id: entry.id,
        date: entry.completed_at,
        type: entry.type,
        fromAmount: entry.legs[0].amount + ' ' + entry.legs[0].currency,
        toAmount: entry.legs[1].amount + ' ' + entry.legs[1].currency,
        state: entry.state
      }))
    );
  };

  const fetchFx = async () => {
    console.log('fx-trades', fx);
    const url =
      'https://cors-anywhere.herokuapp.com/https://sandbox-b2b.revolut.com/api/1.0/rate?from=USD&to=EUR&amount=100';
    const req = await fetch(url, {
      method: 'GET',
      headers
    });

    const res = await req.json();
    console.log(res);
  };

  useEffect(() => {
    // console.log('useEffect');

    tab === 0 && fetchAx();

    tab === 1 && fetchTx();

    tab === 2 && fetchTx();

    tab === 3 && fetchFx();

    return () => {
      // console.log('unmount');
    };
  }, [tab]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabChange = newValue => () => {
    setTab(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        open={open}
        tab={tab}
        handleDrawerClose={handleDrawerClose}
        handleTabChange={handleTabChange}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {tab === 0 && <Accounts data={ax} />}
        {tab === 1 && <Table data={tx} />}
        {tab === 2 && <Analytics />}
        {tab === 3 && <h1>FX Trade</h1>}
      </main>
    </div>
  );
};

export default App;
