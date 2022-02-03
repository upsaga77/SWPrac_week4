// Get all hospitals, GET /api/v1/hospitals, Public
exports.getHospitals = (req,res,next) => {
    res.status(200).json({success:true, msg:'Show all hospitals'});
};

// Get all hospital, GET /api/v1/hospitals/:id, Public
exports.getHospital = (req,res,next) => {
    res.status(200).json({success:true, msg:`Show hospital ${req.params.id}`});
};

// Create hospital, GET /api/v1/hospitals, Private
exports.createHospital = (req,res,next) => {
    res.status(200).json({success:true, msg:'create new hospitals'});
};

// Update single hospital, GET /api/v1/hospitals/:id, Private
exports.updateHospital = (req,res,next) => {
    res.status(200).json({success:true, msg:`Update hospital ${req.params.id}`});
};

// Delete single hospital, GET /api/v1/hospitals/:id, Private
exports.deleteHospital = (req,res,next) => {
    res.status(200).json({success:true, msg:`Delete hospital ${req.params.id}`});
};