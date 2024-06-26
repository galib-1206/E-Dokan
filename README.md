# ShopSwift

This repository contains a Django and React ecommerce project. 
Among other functionality, 
- users can create their account, 
- add items to their cart and 
- purchase those items using Stripe.


## Backend development workflow

python version recommended 3.8.10
```sh 
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Frontend development workflow

nvm version recommended 16
```sh
npm i
npm start
```

## For deploying

```sh
npm run build
```

