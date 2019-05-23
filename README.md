# api-prueba
Api NodeJs con Neo4j


BD Neo4j

CREATE (n:Servidor {id:'1', pais:'Chile', grupo:'RE_REGULARIZACION', host:'tobads01', servicio:'Log Security'}) RETURN n

CREATE (n:Servidor {id:'2', pais:'Chile', grupo:'CL_SIEBEL_LOY', host:'g500603svcn8', servicio:'Script-SiebelEnterprise-LOYRT'}) RETURN n

CREATE (n:Servidor {id:'3', pais:'Colombia', grupo:'CO_DOMAIN_CONTROLLER', host:'cosvp0000068', servicio:'Log Directory Service'}) RETURN n

CREATE (n:Servidor {id:'4', pais:'Argentina', grupo:'AR_TS', host:'g100603svts16', servicio:'Log Security'}) RETURN n

CREATE (n:Servidor {id:'5', pais:'Argentina', grupo:'AR_AUDIT', host:'g100603sv58h', servicio:'Log System'}) RETURN n

CREATE (n:Servidor {id:'6', pais:'Argentina', grupo:'AR_ICFP_PROVEEDORES', host:'g100603sv335', servicio:'Log System'}) RETURN n

CREATE (n:Servidor {id:'7', pais:'Chile', grupo:'AR_RPA', host:'g500603svgpk', servicio:'MSSQLSERVER model Database'}) RETURN n

CREATE (n:Servidor {id:'8', pais:'Chile', grupo:'CL_PROYECTO_WE', host:'g500603svhch', servicio:'PostgreSQL ANALYZE dbcat'}) RETURN n

CREATE (n:Servidor {id:'9', pais:'Argentina', grupo:'BIZTALK', host:'g100603sv232', servicio:'HTTP Cencosud.BizTalk.Interfases.SAS.ESB.AMClienteFidelidad/Request.asmx'}) RETURN n

CREATE (n:Servidor {id:'10', pais:'Argentina', grupo:'AR_DHCP', host:'g100603sv56a', servicio:'Interface 2'}) RETURN n

CREATE (n:Servidor {id:'11', pais:'Chile', grupo:'CL_MANHATTAN_EOM', host:'g500603svfyl', servicio:'g500603svfyl_SYDEADLT'}) RETURN n

CREATE (n:Servidor {id:'12', pais:'Argentina', grupo:'RE_REGULARIZACION', host:'g100603sv32k', servicio:'Log System'}) RETURN n

CREATE (n:Servidor {id:'13', pais:'Argentina', grupo:'AR_TS', host:'g100603svtsb', servicio:'Log Application'}) RETURN n

CREATE (n:Servidor {id:'14', pais:'Chile', grupo:'CL_ADFS', host:'g500603sv0yx', servicio:'Log Application'}) RETURN n

CREATE (n:Servidor {id:'15', pais:'Chile', grupo:'CL_FLEJES', host:'g500603sv832', servicio:'Log Symantec Endpoint Protection Client'}) RETURN n

CREATE (n:Servidor {id:'16', pais:'Argentina', grupo:'AR_TS', host:'g100603svtsh', servicio:'CPU utilization'}) RETURN n

CREATE (n:Servidor {id:'17', pais:'Chile', grupo:'RE_REGULARIZACION', host:'iquads02', servicio:'Memory and pagefile'}) RETURN n

CREATE (n:Servidor {id:'18', pais:'Colombia', grupo:'CO_GENESIX', host:'osiris', servicio:'Process p_ctmag'}) RETURN n

CREATE (n:Servidor {id:'19', pais:'Chile', grupo:'CL_NEGOCIO_DIGITAL_EASY', host:'sv77p1comm01r', servicio:'Memory'}) RETURN n

CREATE (n:Servidor {id:'20', pais:'Brasil', grupo:'BR_PORTAL_NOTA_DA_GENTE', host:'sqlserver00', servicio:'MSSQLSERVER DBConcentradorExpurgo Database'}) RETURN n

CREATE (n:Servidor {id:'21', pais:'Chile', grupo:'RE_REGULARIZACION', host:'curads01', servicio:'Log Symantec Endpoint Protection Client'}) RETURN n

CREATE (n:Servidor {id:'22', pais:'Argentina', grupo:'AR_TS', host:'g100603svbhf', servicio:'PING'}) RETURN n

CREATE (n:Servidor {id:'23', pais:'Chile', grupo:'RE_REGULARIZACION', host:'jquads01', servicio:'Log Security'}) RETURN n

CREATE (n:Servidor {id:'24', pais:'Argentina', grupo:'RE_REGULARIZACION', host:'g100603sv10o', servicio:'Log Symantec Endpoint Protection Client'}) RETURN n

CREATE (n:Servidor {id:'25', pais:'Chile', grupo:'RE_REGULARIZACION', host:'g500603svgcc', servicio:'Log Symantec Endpoint Protection Client'}) RETURN n

____________

Match (a:Servidor {id:'1'}), (b:Servidor {id:'5'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'4'}), (b:Servidor {id:'7'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'5'}), (b:Servidor {id:'10'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'6'}), (b:Servidor {id:'9'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'6'}), (b:Servidor {id:'11'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'6'}), (b:Servidor {id:'12'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'8'}), (b:Servidor {id:'4'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'8'}), (b:Servidor {id:'5'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'8'}), (b:Servidor {id:'6'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'8'}), (b:Servidor {id:'14'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'8'}), (b:Servidor {id:'18'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'10'}), (b:Servidor {id:'2'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'10'}), (b:Servidor {id:'3'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'14'}), (b:Servidor {id:'20'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'18'}), (b:Servidor {id:'13'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'18'}), (b:Servidor {id:'23'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'20'}), (b:Servidor {id:'15'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'20'}), (b:Servidor {id:'21'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'20'}), (b:Servidor {id:'24'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'23'}), (b:Servidor {id:'16'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'23'}), (b:Servidor {id:'17'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'23'}), (b:Servidor {id:'19'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'24'}), (b:Servidor {id:'22'}) merge (a)-[r:conectado]->(b)

Match (a:Servidor {id:'24'}), (b:Servidor {id:'25'}) merge (a)-[r:conectado]->(b)
