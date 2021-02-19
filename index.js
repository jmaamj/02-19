{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;\f2\fnil\fcharset0 Menlo-Italic;
}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red244\green246\blue249;\red8\green48\blue118;
\red7\green68\blue184;\red87\green96\blue106;\red22\green94\blue33;}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c96471\c97255\c98039;\cssrgb\c1569\c25882\c53725;
\cssrgb\c0\c36078\c77255;\cssrgb\c41569\c45098\c49020;\cssrgb\c9020\c43529\c17255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs27\fsmilli13600 \cf2 \cb3 \expnd0\expndtw0\kerning0
const
\f1\b0 \cf2 \cb3  core = \cf4 \cb3 require\cf2 \cb3 (\cf5 '@actions/core'\cf2 );\

\f0\b \cf2 \cb3 const
\f1\b0 \cf2 \cb3  github = \cf4 \cb3 require\cf2 \cb3 (\cf5 '@actions/github'\cf2 );\
\

\f0\b \cf2 \cb3 try
\f1\b0 \cf2 \cb3  \{\
  
\f2\i \cf6 // `who-to-greet` input defined in action metadata file
\f1\i0 \cf2 \
  
\f0\b \cf2 \cb3 const
\f1\b0 \cf2 \cb3  nameToGreet = core.getInput(\cf5 'who-to-greet'\cf2 );\
  \cf4 \cb3 console\cf2 \cb3 .log(\cf5 `Hello \cf2 $\{nameToGreet\}\cf5 !`\cf2 );\
  
\f0\b \cf2 \cb3 const
\f1\b0 \cf2 \cb3  time = (
\f0\b \cf2 \cb3 new
\f1\b0 \cf2 \cb3  \cf4 \cb3 Date\cf2 \cb3 ()).toTimeString();\
  core.setOutput(\cf5 "time"\cf2 , time);\
  
\f2\i \cf6 // Get the JSON webhook payload for the event that triggered the workflow
\f1\i0 \cf2 \
  
\f0\b \cf2 \cb3 const
\f1\b0 \cf2 \cb3  payload = \cf4 \cb3 JSON\cf2 \cb3 .stringify(github.context.payload, \cf7 undefined\cf2 , \cf7 2\cf2 )\
  \cf4 \cb3 console\cf2 \cb3 .log(\cf5 `The event payload: \cf2 $\{payload\}\cf5 `\cf2 );\
\} 
\f0\b \cf2 \cb3 catch
\f1\b0 \cf2 \cb3  (error) \{\
  core.setFailed(error.message);\
\}}