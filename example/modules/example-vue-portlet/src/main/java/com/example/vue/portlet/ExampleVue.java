package com.example.vue.portlet;

import com.example.vue.constants.ExampleVueKeys;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;
import java.io.IOException;
import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import org.osgi.service.component.annotations.Component;

/**
 * @author traviscory
 */
@Component(
    immediate = true,
    property = {
        "com.liferay.portlet.display-category=category.sample",
        "com.liferay.portlet.instanceable=true",
        "javax.portlet.init-param.template-path=/",
        "javax.portlet.init-param.view-template=/view.jsp",
        "javax.portlet.name=" + ExampleVueKeys.ExampleVue,
        "javax.portlet.resource-bundle=content.Language",
        "javax.portlet.security-role-ref=power-user,user"
    },
    service = Portlet.class
)
public class ExampleVue extends MVCPortlet {

  @Override
  public void doView(
      RenderRequest renderRequest, RenderResponse renderResponse)
      throws IOException, PortletException {

    super.doView(renderRequest, renderResponse);
  }
}