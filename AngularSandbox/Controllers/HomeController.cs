using Microsoft.AspNetCore.Mvc;

namespace AngularSandbox.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public void CheckHealty()
        {
            return;
        }
    }
}
