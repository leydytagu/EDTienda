import{B,C as T,D as q,E as K,F as L,G as H,H as O,V as Q,a as P,g as y,h as I,i as V,j as Y,k as $,l as x,m as p,n as _,o as w,q as N,s as F,t as M,v as k,w as z,x as J,z as j}from"./chunk-J35QIWRH.js";import{Ab as r,Bb as o,Cb as d,Db as g,Eb as h,Ib as v,Kc as C,Nc as U,Tb as n,Vb as A,Xa as s,Ya as c,aa as R,ba as S,fa as G,la as E,ma as b,ob as u,qb as l}from"./chunk-IDCTCBMT.js";function se(t,e){t&1&&(r(0,"mat-error"),n(1," Este campo es obligatorio "),o())}function le(t,e){t&1&&(r(0,"mat-error"),n(1," Ingrese un email v\xE1lido "),o())}function pe(t,e){t&1&&(r(0,"mat-error"),n(1," Este campo es obligatorio "),o())}var W=(()=>{let e=class e{constructor(i,a,m,f){this.authService=i,this.fb=a,this.router=m,this.snackBar=f,this.form=this.fb.group({email:["",[p.required,p.email]],password:["",p.required]})}controlHasError(i,a){return this.form.controls[i].hasError(a)}login(){if(this.form.invalid)return;let i=this.form.value;this.authService.login(i).subscribe({next:()=>{this.showSnackBar("Inicio de sesi\xF3n exitoso"),this.router.navigate(["home"])},error:()=>{this.showSnackBar("Error en el inicio de sesi\xF3n. Por favor, intenta de nuevo.")}})}showSnackBar(i){this.snackBar.open(i,"Cerrar",{duration:3e3})}};e.\u0275fac=function(a){return new(a||e)(c($),c(k),c(y),c(B))},e.\u0275cmp=E({type:e,selectors:[["app-login"]],decls:23,vars:5,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"mb-3","w-100"],["matInput","","type","email","placeholder","Email","formControlName","email"],[4,"ngIf"],["matInput","","type","password","placeholder","Contrase\xF1a","formControlName","password"],["type","submit","mat-raised-button","","color","primary",1,"w-100",3,"disabled"],[1,"mt-3","text-center"],["routerLink","/signup",1,"ms-2"]],template:function(a,m){a&1&&(r(0,"div",0)(1,"h1",1),n(2,"Inicio de sesi\xF3n"),o(),r(3,"div",2)(4,"div",3)(5,"form",4),v("ngSubmit",function(){return m.login()}),r(6,"mat-form-field",5)(7,"mat-label"),n(8,"Email"),o(),d(9,"input",6),u(10,se,2,0,"mat-error",7)(11,le,2,0,"mat-error",7),o(),r(12,"mat-form-field",5)(13,"mat-label"),n(14,"Contrase\xF1a"),o(),d(15,"input",8),u(16,pe,2,0,"mat-error",7),o(),r(17,"button",9),n(18," Ingresar "),o(),r(19,"div",10),n(20," A\xFAn no tienes una cuenta? "),r(21,"a",11),n(22," Reg\xEDstrate aqu\xED "),o()()()()()()),a&2&&(s(5),l("formGroup",m.form),s(5),l("ngIf",m.controlHasError("email","required")),s(),l("ngIf",m.controlHasError("email","email")),s(5),l("ngIf",m.controlHasError("password","required")),s(),l("disabled",m.form.invalid))},dependencies:[C,I,N,x,_,w,F,M,L,H,T,q,j]});let t=e;return t})();var X=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl=Y.apiUrl}signUp(i){let a=`${this.baseUrl}/customers`;return this.http.post(a,i)}};e.\u0275fac=function(a){return new(a||e)(G(P))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ue(t,e){t&1&&(r(0,"mat-error"),n(1," Este campo es obligatorio "),o())}function de(t,e){t&1&&(r(0,"mat-error"),n(1," Este campo es obligatorio "),o())}function fe(t,e){t&1&&(g(0),n(1," Este campo es obligatorio "),h())}function ge(t,e){t&1&&(g(0),n(1," Ingrese un email v\xE1lido "),h())}function he(t,e){t&1&&(g(0),n(1," Este campo es obligatorio "),h())}function ve(t,e){t&1&&(g(0),n(1," Ingrese una contrase\xF1a de al menos 4 caracteres. "),h())}var Z=(()=>{let e=class e{constructor(i,a,m,f){this.fb=i,this.router=a,this.snackBar=m,this.signUpService=f,this.passwordVisible=!1,this.form=this.fb.group({firstName:["",[p.required]],lastName:["",[p.required]],email:["",[p.required,p.email]],password:["",[p.required,p.minLength(4)]]})}controlHasError(i,a){return this.form.controls[i].hasError(a)}signup(){if(this.form.invalid)return;let i=this.form.value;this.signUpService.signUp(i).subscribe({next:()=>{this.showSnackBar("Registro exitoso"),this.router.navigate(["home"])},error:()=>{this.showSnackBar("Error en el registro. Por favor, intenta de nuevo.")}})}showSnackBar(i){this.snackBar.open(i,"Cerrar",{duration:3e3})}};e.\u0275fac=function(a){return new(a||e)(c(k),c(y),c(B),c(X))},e.\u0275cmp=E({type:e,selectors:[["app-signup"]],decls:39,vars:10,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],["autocomplete","off",1,"mt-5",3,"ngSubmit","formGroup"],["appearance","outline",1,"mb-2","w-100"],["matInput","","type","text","placeholder","Nombres","formControlName","firstName"],[4,"ngIf"],["matInput","","type","text","placeholder","Apellidos","formControlName","lastName"],["matInput","","type","text","placeholder","Correo electr\xF3nico","formControlName","email"],["matInput","","placeholder","Contrase\xF1a","formControlName","password",3,"type"],["matSuffix","",3,"click"],[1,"text-end"],["mat-raised-button","","color","primary",1,"w-100",3,"disabled"],[1,"mt-3","text-center"],["routerLink","/",1,"ms-2"]],template:function(a,m){a&1&&(r(0,"div",0)(1,"h1",1),n(2,"Registro de usuario"),o(),r(3,"div",2)(4,"div",3)(5,"form",4),v("ngSubmit",function(){return m.signup()}),r(6,"mat-form-field",5)(7,"mat-label"),n(8,"Nombres"),o(),d(9,"input",6),u(10,ue,2,0,"mat-error",7),o(),r(11,"mat-form-field",5)(12,"mat-label"),n(13,"Apellidos"),o(),d(14,"input",8),u(15,de,2,0,"mat-error",7),o(),r(16,"mat-form-field",5)(17,"mat-label"),n(18,"Correo electr\xF3nico"),o(),d(19,"input",9),r(20,"mat-error"),u(21,fe,2,0,"ng-container",7)(22,ge,2,0,"ng-container",7),o()(),r(23,"mat-form-field",5)(24,"mat-label"),n(25,"Contrase\xF1a"),o(),d(26,"input",10),r(27,"mat-icon",11),v("click",function(){return m.passwordVisible=!m.passwordVisible}),n(28),o(),r(29,"mat-error"),u(30,he,2,0,"ng-container",7)(31,ve,2,0,"ng-container",7),o()(),r(32,"div",12)(33,"button",13),n(34," Registrarme "),o(),r(35,"div",14),n(36," \xBFYa tienes una cuenta? "),r(37,"a",15),n(38," Inicia sesi\xF3n "),o()()()()()()()),a&2&&(s(5),l("formGroup",m.form),s(5),l("ngIf",m.controlHasError("firstName","required")),s(5),l("ngIf",m.controlHasError("lastName","required")),s(6),l("ngIf",m.controlHasError("email","required")),s(),l("ngIf",m.controlHasError("email","pattern")),s(4),l("type",m.passwordVisible?"text":"password"),s(2),A(" ",m.passwordVisible?"visibility_off":"visibility"," "),s(2),l("ngIf",m.controlHasError("password","required")),s(),l("ngIf",m.controlHasError("password","minlength")),s(2),l("disabled",!m.form.valid))},dependencies:[C,I,N,x,_,w,F,M,L,H,T,q,K,j,O]});let t=e;return t})();var Se=[{path:"",component:W},{path:"signup",component:Z}],ee=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({imports:[V.forChild(Se),V]});let t=e;return t})();var Re=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({imports:[U,ee,z,J,Q]});let t=e;return t})();export{Re as UserModule};