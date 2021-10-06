# First One
![](https://i.imgur.com/e0YQHrD.png)

**index.js**
```
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'PANYANTING',id:'406730282' });
});
```

**index.ejs**
```
<body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <h3>
      My name is <%= name %>.
    </h3>
    <h3>
      My student id is <%= id %>.
    </h3>
  </body>
```

---

# Second One
![](https://i.imgur.com/zZM6trV.jpg)
**app.js**
```
const crown_82_Router = require('./routes/crown_82');
```
```
app.use('/crown_82',crown_82_Router);
```

**crown_82.js**
```
router.get('/', function(req, res, next) {
  res.render('crown_82', { title: 'Express',name:'PANYANTING',id:'406730282' });
});
```

**crown_82.ejs**
```
<h3>
    <%= name %>
    <%= id%>
</h3>
```

---
# Third One
![](https://i.imgur.com/kDTJAJX.png)
---
# Forth One
![](https://i.imgur.com/a8VIXqE.png)
---
# Fifth One
![](https://i.imgur.com/IwI4j1T.png)
**database.js**
```
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_82',
  password: '0000',
  port: '5432',
})

pool.query('SELECT *from category_82',(err,res)=>{
    console.log(JSON.stringify(res.rows));
    pool.end();
});

module.exports = pool;
```
---
# Sixth One
![]()