const Hospital = require('../models/Hospital.js');
// Get all hospitals, GET /api/v1/hospitals, Public
exports.getHospitals = async (req, res, next) => {
    try {
      const hospitals = await Hospital.find();
      res
        .status(200)
        .json({ success: true, count: hospitals.length, data: hospitals });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  };

// Get all hospital, GET /api/v1/hospitals/:id, Public
exports.getHospital = async (req, res, next) => {
    try {
      const id = req.params["id"];
      const hospital = await Hospital.findById(id);
  
      if (!hospital) {
        return res.status(404).json({ success: false });
      }
      res.status(200).json({ success: true, data: hospital });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  };

// Create hospital, POST /api/v1/hospitals, Private
exports.createHospital = async (req, res, next) => {
    const hospital = await Hospital.create(req.body);
    res.status(201).json({ success: true, data: hospital });
  };

// Update single hospital, PUT /api/v1/hospitals/:id, Private
exports.updateHospital = async (req, res, next) => {
    try {
      const id = req.params["id"];
      const hospital = await Hospital.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!hospital) {
        return res.status(404).json({ success: false });
      }
      res.status(200).json({ success: true, data: hospital });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  };

// Delete single hospital, DELETE /api/v1/hospitals/:id, Private
exports.deleteHospital = async (req, res, next) => {
    try {
      const id = req.params["id"];
      const hospital = await Hospital.findByIdAndDelete(id);
  
      if (!hospital) {
        return res.status(404).json({ success: false });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  };