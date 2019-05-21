const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/medical', (req, res) => {
    let medical = req.body;
    console.log('Adding in tattoo:', medical);
    let sqlText = `INSERT INTO medical (doctor_name, doctor_phone, medical_conditions, counselor, counselor_phone, pediatrician, pediatrician_phone, optometrist, optometrist_phone, dentist, dentist_phone, vaccinations, insurance_card_info, fee_coverage, medical_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
    pool.query(sqlText, [medical.doctor_name, medical.doctor_phone, medical.medical_conditions, medical.counselor, medical.counselor_phone, medical.pediatrician, medical.pediatrician_phone, medical.optometrist, medical.optometrist_phone, medical.dentist, medical.dentist_phone, medical.vaccinations, medical.insurance_card_info, medical.fee_coverage, medical.medical_notes])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST medical form');
        res.sendStatus(500);
      })
  })

router.get('/medical', (req, res) => {
    console.log('Getting all medical info');
    pool.query(`SELECT * FROM "medical"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the medical forms', error);
        res.sendStatus(500);
    })
  })

  router.post('/bio', (req, res) => {
    let bio = req.body;
    console.log('Adding in primary individual:', bio);
    let sqlText = `INSERT INTO primary_individual (last_name, first_name, dob, spouse_first_name, spouse_dob, phone, email, address, referred_by, reference_date, passport, us_id, encrypted) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    pool.query(sqlText, [bio.last_name, bio.first_name, bio.dob, bio.spouse_first_name, bio.spouse_dob, bio.phone, bio.email, bio.address, bio.referred_by, bio.reference_date, bio.passport, bio.us_id, bio.encrypted])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST bio form, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/bio', (req, res) => {
    console.log('Getting all bio info');
    pool.query(`SELECT * FROM "primary_individual"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the bio forms', error);
        res.sendStatus(500);
    })
  })


module.exports = router;