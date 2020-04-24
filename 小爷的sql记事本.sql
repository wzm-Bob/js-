-- 增
alter table tbl_understand  add( SFJY CHAR(1) ) ;
comment  on  column  tbl_understand.SFJY   is  '学生是否就业';
insert into tbl_sys_res_right (RES_RIGHT_ID, RES_NAME, RES_CODE, PARENT_ID, RES_ICON, RES_URL, RES_TYPE, OPT_TYPE, ORDER_NO, STATE, PUBLISH_TYPE, BOOK_CODE)
values ('8a92e49c51f22chj8151f3312io72p02', '生产生活条件（新）', '100167', '8a928cbc4e0ab2c0014e0ac9ed200017', null, null, '1', null, 94, '1', '1', null);
-- 删
delete  from xxx
truncate table xxx
-- 改
update  xx set 
-- 查
-- Create table
create table TBL_SYS_USER
(
  user_id             VARCHAR2(32) not null,
  login_name          VARCHAR2(512) not null,
  login_pwd           VARCHAR2(256) not null,
  user_name           VARCHAR2(512) not null,
  user_phone          VARCHAR2(32),
  order_id            NUMBER,
  org_id              VARCHAR2(32) not null,
  create_time         CHAR(19) not null,
  state               CHAR(1) not null,
  user_sex            VARCHAR2(1),
  user_edu            VARCHAR2(2),
  user_birthday       VARCHAR2(19),
  user_type           VARCHAR2(3),
  user_job            VARCHAR2(128),
  user_card_no        VARCHAR2(22),
  political_status    VARCHAR2(2),
  personnel_structure VARCHAR2(1),
  nation              VARCHAR2(2),
  wteam_job           VARCHAR2(1),
  unit_constitution   VARCHAR2(1),
  user_mail           VARCHAR2(64),
  input_platform      VARCHAR2(128),
  login_time          CHAR(19),
  user_status         CHAR(1),
  effective_time      CHAR(19),
  operate_id          VARCHAR2(32),
  operate_time        VARCHAR2(19),
  create_id           VARCHAR2(32),
  book_code           VARCHAR2(20),
  book_name           VARCHAR2(50),
  group_id            CHAR(32),
  login_key           VARCHAR2(128)
)

-- Add comments to the table 
comment on table TBL_SYS_USER
  is '用户表';
-- Add comments to the columns 
comment on column TBL_SYS_USER.user_id
  is '主键';
comment on column TBL_SYS_USER.login_name
  is '登录名';
comment on column TBL_SYS_USER.login_pwd
  is '登录密码';
comment on column TBL_SYS_USER.user_name
  is '用户姓名';
comment on column TBL_SYS_USER.user_phone
  is '用户手机';
comment on column TBL_SYS_USER.order_id
  is '排序字段';
comment on column TBL_SYS_USER.org_id
  is '单位ID';
comment on column TBL_SYS_USER.create_time
  is '创建时间';
comment on column TBL_SYS_USER.state
  is '状态，0-无效，1-正常，2-删除';
comment on column TBL_SYS_USER.user_sex
  is '性别';
comment on column TBL_SYS_USER.user_edu
  is '学历';
comment on column TBL_SYS_USER.user_birthday
  is '出生日期';
comment on column TBL_SYS_USER.user_type
  is '用户类型1是系统用户，2是帮扶责任人，3第三方调查用户（31：管理员用户，32：调查组用户，33：调查员用户）4行业厅局用户';
comment on column TBL_SYS_USER.user_job
  is '工作单位职位';
comment on column TBL_SYS_USER.user_card_no
  is '身份证号码';
comment on column TBL_SYS_USER.political_status
  is '政治面貌';
comment on column TBL_SYS_USER.personnel_structure
  is '人员构成';
comment on column TBL_SYS_USER.nation
  is '民族';
comment on column TBL_SYS_USER.wteam_job
  is '工作队职务';
comment on column TBL_SYS_USER.unit_constitution
  is '单位构成';
comment on column TBL_SYS_USER.user_mail
  is '邮箱账号';
comment on column TBL_SYS_USER.input_platform
  is '录入平台';
comment on column TBL_SYS_USER.login_time
  is '密码修改时间';
comment on column TBL_SYS_USER.user_status
  is '是否强制修改密码：0不强制修改密码，1强制修改密码';
comment on column TBL_SYS_USER.effective_time
  is '用户有效时间';
comment on column TBL_SYS_USER.book_code
  is '账套ID';
comment on column TBL_SYS_USER.book_name
  is '账套名称';
comment on column TBL_SYS_USER.group_id
  is '组ID（用于第三方调查区分用户属于哪个组字段，空表示第三方管理员）';
comment on column TBL_SYS_USER.login_key
  is '绑定主键';
-- Create/Recreate primary, unique and foreign key constraints 
alter table TBL_SYS_USER
  add constraint TBL_SYS_USER_ID primary key (USER_ID)
  using index 
  tablespace HBJZFP
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

-- Create table
create table TBL_SYS_RES_RIGHT
(
  res_right_id CHAR(32) not null,
  res_name     VARCHAR2(64) not null,
  res_code     VARCHAR2(32) not null,
  parent_id    VARCHAR2(32) not null,
  res_icon     VARCHAR2(512),
  res_url      VARCHAR2(512),
  res_type     CHAR(1) not null,
  opt_type     CHAR(1),
  order_no     INTEGER,
  state        CHAR(1) not null,
  publish_type CHAR(1),
  book_code    VARCHAR2(32)
)
tablespace HBJZFP
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
-- Add comments to the table 
comment on table TBL_SYS_RES_RIGHT
  is '全局定义系统所有功能菜单及操作';
-- Add comments to the columns 
comment on column TBL_SYS_RES_RIGHT.res_right_id
  is '资源权限主键';
comment on column TBL_SYS_RES_RIGHT.res_name
  is '资源名称';
comment on column TBL_SYS_RES_RIGHT.res_code
  is '资源编码';
comment on column TBL_SYS_RES_RIGHT.parent_id
  is '父级资源，-1为顶级资源';
comment on column TBL_SYS_RES_RIGHT.res_icon
  is '资源图标';
comment on column TBL_SYS_RES_RIGHT.res_url
  is '资源链接';
comment on column TBL_SYS_RES_RIGHT.res_type
  is '资源类型，0- 菜单；1- 操作';
comment on column TBL_SYS_RES_RIGHT.opt_type
  is '操作类型';
comment on column TBL_SYS_RES_RIGHT.order_no
  is '排序编号';
comment on column TBL_SYS_RES_RIGHT.state
  is '状态：0-无效；1-有效';
comment on column TBL_SYS_RES_RIGHT.publish_type
  is '公共资源1，账套资源，2';
comment on column TBL_SYS_RES_RIGHT.book_code
  is '账套CODE';

-- Create table
create table TBL_SYS_DICT
(
  dict_id      CHAR(32) not null,
  dict_name    VARCHAR2(128) not null,
  dict_value   VARCHAR2(256) not null,
  dict_type_id CHAR(32) not null,
  dict_unit    VARCHAR2(64),
  dict_extend  VARCHAR2(512),
  validates    VARCHAR2(64),
  sort         NUMBER
)
tablespace HBJZFP
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
-- Add comments to the columns 
comment on column TBL_SYS_DICT.dict_id
  is '字典主键';
comment on column TBL_SYS_DICT.dict_name
  is '字典名称';
comment on column TBL_SYS_DICT.dict_value
  is '字典值';
comment on column TBL_SYS_DICT.dict_type_id
  is '字典类型';
comment on column TBL_SYS_DICT.dict_unit
  is '字典单位';
comment on column TBL_SYS_DICT.dict_extend
  is '预留字段，用于各业务实现自定义逻辑';
comment on column TBL_SYS_DICT.validates
  is '预留验证使用';

-- Create table
create table TBL_SYS_DICT_TYPE
(
  dict_type_id   CHAR(32) not null,
  dict_type_name VARCHAR2(256) not null,
  state          CHAR(1)
)
tablespace HBJZFP
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
-- Add comments to the columns 
comment on column TBL_SYS_DICT_TYPE.dict_type_id
  is '字典类型主键';
comment on column TBL_SYS_DICT_TYPE.dict_type_name
  is '字典类型名称';
comment on column TBL_SYS_DICT_TYPE.state
  is '状态：0-无效；1-有效；';

  -- Create table
create table TBL_SYS_FILE_RELATION
(
  relation_id CHAR(32) not null,
  biz_id      VARCHAR2(64),
  biz_type    VARCHAR2(4),
  file_name   VARCHAR2(2048),
  file_mime   VARCHAR2(256),
  file_size   NUMBER,
  file_url    VARCHAR2(512),
  file_path   VARCHAR2(512),
  user_id     VARCHAR2(32),
  org_id      VARCHAR2(32),
  create_time CHAR(19),
  exd_id      VARCHAR2(64),
  data_year   VARCHAR2(4),
  book_code   VARCHAR2(12)
)
partition by list (BOOK_CODE)
subpartition by list (DATA_YEAR)
(
  partition PAR_632122000000 values ('632122000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_632122000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_632122000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_632122000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_632122000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_632122000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_632122000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_632122000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_632122000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_340823000000 values ('340823000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
    storage
    (
      initial 2
      minextents 1
      maxextents unlimited
    )
  (
    subpartition PAR_340823000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_340823000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_340823000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_340823000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_340823000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_340823000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_340823000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_340823000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_620102000000 values ('620102000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_620102000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_620102000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_620102000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_620102000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_620102000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_620102000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_620102000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_620102000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_430529000000 values ('430529000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_430529000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_430529000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_430529000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_430529000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_430529000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_430529000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_430529000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_430529000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_420300000000 values ('420300000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_420300000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_420300000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_420300000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_420300000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_420300000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_420300000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_420300000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_420300000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_513400000000 values ('513400000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_513400000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_513400000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_513400000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_513400000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_513400000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_513400000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_513400000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_513400000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_522700000000 values ('522700000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_522700000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_522700000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_522700000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_522700000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_522700000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_522700000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_522700000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_522700000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_501000000000 values ('501000000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_501000000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_501000000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_501000000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_501000000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_501000000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_501000000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_501000000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_501000000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_460000000000 values ('460000000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_460000000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_460000000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_460000000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_460000000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_460000000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_460000000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_460000000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_460000000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_632200000000 values ('632200000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_632200000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_632200000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_632200000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_632200000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_632200000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_632200000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_632200000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_632200000000_DEFAULT values (default) tablespace HBJZFP
  ),
  partition PAR_632625000000 values ('632625000000')
    tablespace HBJZFP
    pctfree 10
    initrans 1
    maxtrans 255
  (
    subpartition PAR_632625000000_2020 values ('2020') tablespace HBJZFP,
    subpartition PAR_632625000000_2019 values ('2019') tablespace HBJZFP,
    subpartition PAR_632625000000_2018 values ('2018') tablespace HBJZFP,
    subpartition PAR_632625000000_2017 values ('2017') tablespace HBJZFP,
    subpartition PAR_632625000000_2016 values ('2016') tablespace HBJZFP,
    subpartition PAR_632625000000_2015 values ('2015') tablespace HBJZFP,
    subpartition PAR_632625000000_2014 values ('2014') tablespace HBJZFP,
    subpartition PAR_632625000000_DEFAULT values (default) tablespace HBJZFP
  )
);
-- Add comments to the columns 
comment on column TBL_SYS_FILE_RELATION.relation_id
  is '主键';
comment on column TBL_SYS_FILE_RELATION.biz_id
  is '业务ID';
comment on column TBL_SYS_FILE_RELATION.biz_type
  is '业务编码，即业务顶级权限编码';
comment on column TBL_SYS_FILE_RELATION.file_name
  is '附件名称';
comment on column TBL_SYS_FILE_RELATION.file_mime
  is '附件类型';
comment on column TBL_SYS_FILE_RELATION.file_size
  is '附件大小';
comment on column TBL_SYS_FILE_RELATION.file_url
  is '附件下载地址';
comment on column TBL_SYS_FILE_RELATION.file_path
  is '附件存储路径';
comment on column TBL_SYS_FILE_RELATION.user_id
  is '用户ID';
comment on column TBL_SYS_FILE_RELATION.org_id
  is '单位ID';
comment on column TBL_SYS_FILE_RELATION.create_time
  is '创建时间';
comment on column TBL_SYS_FILE_RELATION.exd_id
  is '扩展业务主键ID';
comment on column TBL_SYS_FILE_RELATION.data_year
  is '数据年份';
comment on column TBL_SYS_FILE_RELATION.book_code
  is '账套编码-用于分区';


-- Create table
create table TBL_SYS_ROLE
(
  role_id          CHAR(32) not null,
  role_name        VARCHAR2(64) not null,
  role_desc        VARCHAR2(128),
  create_time      CHAR(19) not null,
  state            CHAR(1) not null,
  product_code     VARCHAR2(32),
  system_code      VARCHAR2(64),
  devolution_state CHAR(1) default 0,
  roles_state      VARCHAR2(2) default 5,
  book_code        VARCHAR2(20),
  org_id           CHAR(32)
)
tablespace HBJZFP
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
-- Add comments to the table 
comment on table TBL_SYS_ROLE
  is '角色表';
-- Add comments to the columns 
comment on column TBL_SYS_ROLE.role_id
  is '角色ID';
comment on column TBL_SYS_ROLE.role_name
  is '角色名称';
comment on column TBL_SYS_ROLE.role_desc
  is '角色描述';
comment on column TBL_SYS_ROLE.create_time
  is '创建时间';
comment on column TBL_SYS_ROLE.state
  is '状态，0-无效，1-正常';
comment on column TBL_SYS_ROLE.product_code
  is '行业标识';
comment on column TBL_SYS_ROLE.devolution_state
  is '是否可以权限下放，0-否，1-是';
comment on column TBL_SYS_ROLE.roles_state
  is '角色等级:1:省2:市3:县4:乡5:村,31：第三方评估（管理员）32：31：第三方评估（调查组）33：31：第三方评估（调查员）';
comment on column TBL_SYS_ROLE.book_code
  is '账套id';
comment on column TBL_SYS_ROLE.org_id
  is '单位机构ID（用于第三方调查区分多个角色）';
-- Create table
create table TBL_SYS_ROLE_RIGHT
(
  role_right_id CHAR(32) not null,
  role_id       CHAR(32) not null,
  right_id      CHAR(32) not null
)
tablespace HBJZFP
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
-- Add comments to the table 
comment on table TBL_SYS_ROLE_RIGHT
  is '角色权限表';
-- Add comments to the columns 
comment on column TBL_SYS_ROLE_RIGHT.role_right_id
  is '主键';
comment on column TBL_SYS_ROLE_RIGHT.role_id
  is '角色ID';
comment on column TBL_SYS_ROLE_RIGHT.right_id
  is '权限ID';

