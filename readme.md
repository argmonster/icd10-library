# TxAce CMHC ICD 10 Project

## Purpose

This library is the standard Application Programming Interface for dealing with client diagnosis data

## The API

### `getclientdx`

Return the top Client Diagnosis Record Layer

### `getUnbatchCltDx`

Return the _bottom_ most _unbatched_ Client Diagnosis Record Layer. Once a batched Record Layer is found this function assums that all lower layers are also batched.

### `sortDxByV4Axis`

Sorts the general ICD 10 global list of Diagnosis codes into descrete lists corresponding to the axis 1 - 3 of DSM 4

### `getClientAxis4`

Return the top Client Diagnosis Record Layer Axis 4 parts

### `getClientGaf`

Return the top Client Diagnosis Record Layer GAF and ABL parts

### `getClientAamd`

Not Implemented

### `getClientIq`

Return the top Client Diagnosis Record Layer IQ and SQ parts

### `icd10recavail`

Returns Y|N if there is a new ICD 10 Client Diagnosis Record

### `getDxBatchTrans`

Returns the CARE Batch formatted string of the _bottom_ most _unbatched_ Client Diagnosis Record Layer

### `MarkAsBatched`

Update a record with the batchdate

### `GETDXFROM10`

Returns the billing diagnosis based on the service type and version requested

### `Set_Sql`

Sets the sql connection pieces

### `DX_Lookup`

UI Function to look up and select diagnosis codes by term search

### `10_Desc_lookup`

Look up the ICD Code Description from the sql table unique id

### `DX_Uniq_Query9`

Look up all the columns of the ICD 9 GEM Table with a unique id.

### `9_Desc_lookup`

Look up the ICD 9 Code Description from the ICD 10 GEM Table with table's unique id.

### `DX_9Code_Query`

Return the list of Unique IDs for ICD 9 GEM Table baded on the term search

### `DX_Uniq_Query`

Look up all the columns of the ICD 10 GEM Table with a unique id.

### `PreviousGaf`

Return the GAF score of the top Client Diagnosis Record Layer

### `NoDx_Lookup`

Return the ICD Code based on the legacy (DSM 4) Axis meaning 'no diagnosis'

### `IsDXCodeLapsed`

Return Y|N if the Unique ID of an ICD 10 Code is lapsed as of a date

### `ICD10_Desc`

Return the ICD 10 or 9 Description from the ICD 10 or 9 flat file.


## Install Parmfiles and Uscripts

### Automated install

*note* requires node js to be installed

`$ cp config.example.json config.ignore.json`

edit config.ignore with your system settings. Required settings:

  * sysname
  * webname
  * host
  * name
  * user
  * cronname
  * cron

`$ npm install`
`$ node deploy`

### Manual Install

  * Copy the following files into $sysname/SCRIPT/S directory
     * CONVICD10_9.usc
     * inc_DX10.usc
     * lib_DX10.usc
  * Use CMHC Uscript interface to compile the following scripts
     * CONVICD10_9.usc
     * lib_DX10.usc

### ICD9 Gaf DST
 icd9_gaf_dst DST_NAME
 ex.) icd9_gaf_dst c.dxaxvc
