using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PackageService.Services;
using PackageService.Models;
using PackageService.Repository;
using PackageService.Exceptions;
using Newtonsoft.Json;
using Confluent.Kafka;



namespace PackageService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackageService svc;
        private readonly IConfiguration config;

        public PackageController(IPackageService svc, IConfiguration config)
        {
            this.svc = svc;
            this.config = config;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Package order)
        {
            svc.CreatePackage(order);
            return Ok(order);
            
        }
        [HttpGet]
        [Route("GetAllPackages")]
        public IActionResult get()
        {
            var res = svc.GetPackage();
            return StatusCode(200, res);
        }

        [HttpGet("GetPackagebyId")]
        public IActionResult getcustbyid(int pack_id)
        {
            try
            {
                var res = svc.GetPackageById(pack_id);
                return StatusCode(200, res);
            }
            catch (PackageIdDoesnotExistException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("GetPackagebyCompany")]
        public IActionResult getpackbycompany(string cname)
        {
            try
            {
                var res = svc.GetPackageByCompany(cname);
                return StatusCode(200, res);
            }
            catch (PackageIdDoesnotExistException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPut("UpdatePackage")]
        public IActionResult updatepackage([FromBody]Package packobj)
        {
            try
            {
                svc.UpdatePackage(packobj);
                return StatusCode(200, "Package Updated Successfully");
            }
            catch (PackageIdDoesnotExistException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpDelete("DeletePackageById")]
        public IActionResult deletepack(int id)
        {
            try
            {
                svc.DeletePackage(id);
                return StatusCode(200, "Package deleted successfully");
            }
            catch (PackageIdDoesnotExistException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
